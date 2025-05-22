// backend/services/openai.js
async function summarizeTodos(todos) {
  const summary = `You have ${todos.length} tasks:\n` + todos.map(t => `• ${t.text}`).join('\n');
  return summary;
}

module.exports = { summarizeTodos };
