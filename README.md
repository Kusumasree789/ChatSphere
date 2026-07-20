# ChatSphere 💬

A real-time chat application built with **MERN Stack** and **Socket.io** for instant messaging.

## 🌐 Live Demo
**[https://chatsphere-jgjo.onrender.com/](https://chatsphere-jgjo.onrender.com/)**

## ✨ Features
- Real-time messaging with WebSockets
- User authentication (Sign up/Login)
- User search and conversations
- Online status tracking
- Responsive design
- JWT-based security

## 🚀 Tech Stack

**Backend:** Node.js, Express, MongoDB, Socket.io, JWT, bcryptjs  
**Frontend:** React, Vite, Tailwind CSS, Zustand, React Router

## ⚡ Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB connection string

### Installation
```bash
# Clone repository
git clone <repository-url>
cd ChatSphere

# Install dependencies
npm install
cd frontend && npm install && cd ..

# Create .env in root
echo "PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key" > .env
```

### Run
```bash
# Development
npm run server          # Terminal 1: Backend
cd frontend && npm run dev   # Terminal 2: Frontend

# Production
npm run build
npm start
```

## 📂 Project Structure
```
ChatSphere/
├── backend/
│   ├── controllers/    (auth, message, user)
│   ├── models/         (MongoDB schemas)
│   ├── routes/         (API endpoints)
│   ├── socket/         (Socket.io config)
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/ (Messages, Sidebar, Skeletons)
│   │   ├── hooks/      (Custom React hooks)
│   │   ├── pages/      (Home, Login, Signup)
│   │   └── zustand/    (State management)
│   └── vite.config.js
└── package.json
```

## 🔌 API Routes
- `POST /api/auth/signup` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/users` - Get all users
- `GET /api/messages/:id` - Get messages
- `POST /api/messages/send/:id` - Send message

## 🔐 Environment Variables
```env
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/<db>
JWT_SECRET=your_jwt_secret_key
```

## 🤝 Contributing
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📝 License
ISC License

---
Built with ❤️ | [Live App](https://chatsphere-jgjo.onrender.com/)
