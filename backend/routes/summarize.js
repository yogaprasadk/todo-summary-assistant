// backend/routes/summarize.js
const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');
const { summarizeTodos } = require('../services/openai');
const { sendToSlack } = require('../services/slack');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

router.post('/', async (req, res) => {
  try {
    const { data: todos, error } = await supabase.from('todos').select('*');
    if (error) return res.status(500).json({ error: error.message });

    if (!todos.length) {
      return res.status(400).json({ error: 'No todos to summarize' });
    }

    const summary = await summarizeTodos(todos);
    const success = await sendToSlack(summary);

    if (!success) return res.status(500).json({ error: 'Failed to send summary to Slack' });

    res.json({ summary, success });
  } catch (err) {
    console.error('Summarize error:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
