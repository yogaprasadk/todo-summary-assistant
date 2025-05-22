# Todo Summary Assistant

A full-stack application for managing to-do items and summarizing them using an LLM, with Slack integration.

## 🛠 Stack

- **Frontend**: React
- **Backend**: Node.js (Express)
- **Database**: Supabase (PostgreSQL)
- **LLM Integration**: OpenAI GPT API
- **Notifications**: Slack Incoming Webhook

---

## ✨ Features

- Create, edit, and delete to-do items
- View all current to-dos
- Generate a summary using LLM
- Send the summary to Slack
- Display success/failure messages

---

## 🚀 Setup Instructions

### 🔧 Backend

1. `cd backend`
2. `npm install`
3. Create `.env` file from `.env.example` and add:
    ```env
    OPENAI_API_KEY=your_openai_api_key
    SLACK_WEBHOOK_URL=your_slack_webhook_url
    SUPABASE_URL=your_supabase_url
    SUPABASE_KEY=your_supabase_key
    ```
4. `npm run dev`

### 💻 Frontend

1. `cd frontend`
2. `npm install`
3. Create `.env` from `.env.example` and configure API base URL:
    ```env
    REACT_APP_API_URL=http://localhost:5000
    ```
4. `npm start`

---

## 🔗 Slack & LLM Setup

### Slack

- Go to [Slack Incoming Webhooks](https://api.slack.com/messaging/webhooks)
- Create a new webhook and copy the URL.
- Paste it in the `.env` file.

### OpenAI

- Get your API key from [OpenAI](https://platform.openai.com/account/api-keys)
- Paste it in the `.env` file.

---

## 📐 Architecture & Design

- Modular backend using Express routers and services.
- RESTful API design.
- LLM call handled via a dedicated service layer.
- Slack integration as a utility module.
- Simple React UI with state management using hooks.

---

## 🌐 (Optional) Deployment

Frontend deployed to Vercel: https://todosummaryassistant1.netlify.app/


---

## 📄 License

MIT
