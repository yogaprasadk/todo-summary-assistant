import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const res = await axios.get(`${API_URL}/todos`);
      setTodos(res.data);
    } catch (err) {
      setStatus('Error fetching todos');
    }
  }

  async function addTodo() {
    if (!input.trim()) return;
    try {
      await axios.post(`${API_URL}/todos`, { text: input });
      setInput('');
      setStatus('');
      fetchTodos();
    } catch {
      setStatus('Failed to add todo');
    }
  }

  async function deleteTodo(id) {
    try {
      await axios.delete(`${API_URL}/todos/${id}`);
      fetchTodos();
    } catch {
      setStatus('Failed to delete todo');
    }
  }

  async function summarize() {
    setStatus('Summarizing and sending to Slack...');
    try {
      const res = await axios.post(`${API_URL}/summarize`);
      setStatus(res.data.success ? 'Summary sent to Slack!' : 'Failed to send summary');
    } catch {
      setStatus('Error during summarization');
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Todo Summary Assistant</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Add new todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: '8px', width: '70%' }}
        />
        <button onClick={addTodo} style={{ padding: '8px 12px', marginLeft: 10 }}>
          Add
        </button>
      </div>

      <ul>
        {todos.length === 0 && <li>No todos yet.</li>}
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: 8 }}>
            {todo.text}
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                marginLeft: 15,
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: 4,
                padding: '2px 8px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={summarize}
        style={{
          marginTop: 20,
          padding: '10px 16px',
          backgroundColor: '#2ecc71',
          border: 'none',
          borderRadius: 6,
          color: 'white',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Summarize & Send to Slack
      </button>

      {status && <p style={{ marginTop: 15 }}>{status}</p>}
    </div>
  );
}
