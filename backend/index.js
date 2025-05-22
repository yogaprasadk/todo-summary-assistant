// backend/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const todosRoutes = require('./routes/todos');
const summarizeRoute = require('./routes/summarize');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Use the routers
app.use('/todos', todosRoutes);
app.use('/summarize', summarizeRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
