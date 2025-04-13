# 🧠 AI Resume Builder

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

**AI Resume Builder** is an intelligent web application designed to help users craft professional resumes effortlessly. With real-time previews, customizable templates, and AI-powered content suggestions, it's your one-stop platform for creating standout resumes.

## 📑 Table of Contents
- [Repository](#-repository)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Getting Started](#-getting-started)
- [Features](#-features)
- [Contributing](#-contributing)
- [Support](#-feedback--support)

## 📂 Repository

**GitHub:** [https://github.com/sharad-mishra/resumify](https://github.com/sharad-mishra/resumify)

## ⚙️ Tech Stack

- **Frontend:** React.js, TailwindCSS, Redux Toolkit
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Others:** Docker, JWT, Gemini API

## 🚀 Getting Started

Follow the steps below to set up and run the project locally.

## 🔐 Environment Variables

Create the following environment files before running the app:

### Backend (`Backend/.env`)
```env
MONGODB_URI=your_mongo_uri
PORT=5001
JWT_SECRET_KEY=your_secret_key
JWT_SECRET_EXPIRES_IN=1d
NODE_ENV=development
ALLOWED_SITE=http://localhost:5173
```

### Frontend (`Frontend/.env.local`)
```env
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_APP_URL=http://localhost:5001
```

## 🚀 Installation

### Using Docker
```bash
# Clone the repository
git clone https://github.com/sharad-mishra/resumify.git
cd resumify

# Start backend services
cd Backend
docker-compose up -d

# Start frontend
cd ../Frontend
npm install
npm run dev
```

### Manual Setup
```bash
# Clone and setup backend
git clone https://github.com/sharad-mishra/resumify.git
cd resumify/Backend
npm install
npm run dev

# Setup frontend (in a new terminal)
cd ../Frontend
npm install
npm run dev
```

## ✨ Features

### 🔐 Secure Authentication

- Passwords are hashed with bcrypt
- JWT-based session handling for enhanced security

### 🏠 User Dashboard

- Manage and track multiple resume versions

### 🎨 Customizable Templates

- Choose from various modern resume themes

### 🤖 AI-Powered Suggestions

- Gemini API for intelligent content assistance

### 🔍 Live Resume Preview

- Instant feedback as you edit your resume

### 📄 Export as PDF

- Download your resume in print-ready PDF format

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. Push to your fork:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

## 💬 Feedback & Support

Found a bug or have a feature request? [Open an issue](https://github.com/sharad-mishra/resumify/issues).

---
<div align="center">
  <i>Build your resume smarter, not harder — with AI Resume Builder.</i>
</div>