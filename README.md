# 🧠 MindBridge – AI Assistant Platform

MindBridge is a full-stack AI assistant that enables locally hosted, LLM-powered conversations using open-source technologies. It demonstrates end-to-end AI application development with persistent chat history, RESTful APIs, and local model inference without relying on paid cloud AI services.

---

## 🚀 Features

- Conversational AI powered by locally hosted LLMs (Ollama)
- Persistent multi-turn chat history using PostgreSQL
- React (TypeScript) frontend with a ChatGPT-style interface
- Flask-based RESTful backend API
- Database-backed session and message management
- Fully local development setup with no paid APIs

---

## 🧱 Tech Stack

### Frontend
- React (TypeScript)
- Vite
- HTML / CSS

### Backend
- Python
- Flask
- Flask-CORS

### AI / ML
- Ollama
- LLaMA 3.1 (local inference)

### Database
- PostgreSQL (local)

---

## 🏗 System Architecture

┌──────────────────────────┐
│ User Browser │
│ (React + TypeScript UI) │
└─────────────┬────────────┘
│
│ HTTP / JSON
▼
┌──────────────────────────┐
│ Flask REST API │
│ (Request Handling & │
│ Session Management) │
└─────────────┬────────────┘
│
│ Application Logic
▼
┌──────────────────────────┐
│ Chat Service Layer │
│ - Conversation Context │
│ - Message Orchestration│
└─────────────┬────────────┘
│
┌───────┴─────────┐
│ │
▼ ▼
┌───────────────┐ ┌────────────────┐
│ PostgreSQL DB │ │ Ollama (LLM) │
│ - Sessions │ │ Local Inference│
│ - Messages │ │ LLaMA 3.1 │
└───────────────┘ └────────────────┘
