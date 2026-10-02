# 🎵 Auralis - Real-Time Music Streaming Platform

A modern full-stack music streaming application that delivers seamless music playback, secure authentication, real-time communication, and content management capabilities.

Built with React, Node.js, MongoDB, Socket.IO, and Clerk Authentication, the platform provides an engaging user experience while demonstrating scalable full-stack development practices.

---

## ✨ Key Highlights

* Secure Google Authentication with Clerk
* Real-time music streaming experience
* Live chat powered by Socket.IO
* Responsive design for desktop and mobile devices
* Admin dashboard for content management
* Cloud-based media storage with Cloudinary
* MongoDB Atlas database integration
* Production deployment using Vercel and Render

---

## 🚀 Features

### User Features

* Sign in using Google OAuth
* Browse albums and songs
* Stream music with playback controls
* View trending songs
* Responsive user interface
* Real-time messaging system
* User profile integration

### Admin Features

* Admin-only dashboard access
* Upload songs and album artwork
* Create and manage albums
* Monitor application statistics
* Manage music catalog efficiently

### Real-Time Functionality

* Instant chat messaging
* Live user presence tracking
* Socket.IO powered communication
* Real-time synchronization across clients

---

## 🏗️ System Architecture

Frontend (React + TypeScript)

⬇

REST API (Express.js)

⬇

MongoDB Atlas Database

⬇

Cloudinary Media Storage

⬇

Socket.IO Real-Time Server

---

## 🛠️ Technology Stack

### Frontend

* React.js
* TypeScript
* Vite
* Tailwind CSS
* React Router DOM
* Zustand
* Axios
* Clerk Authentication

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* Express File Upload
* Node Cron

### Cloud Services

* MongoDB Atlas
* Cloudinary
* Clerk

### Deployment

* Vercel
* Render

---

## 📁 Project Structure

```text
Auralis/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── stores/
│   └── layouts/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── lib/
│   └── seeds/
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend

```env
PORT=5000
MONGODB_URI=
CLERK_SECRET_KEY=
CLERK_PUBLISHABLE_KEY=
ADMIN_EMAIL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### Frontend

```env
VITE_CLERK_PUBLISHABLE_KEY=
```

---

## 🚀 Local Setup

### Clone Repository

```bash
git clone https://github.com/Prince-Singh-1/Auralis.git
cd Auralis
```

### Install Dependencies

```bash
npm install

cd frontend
npm install

cd ../backend
npm install
```

### Run Application

Backend

```bash
npm run dev
```

Frontend

```bash
npm run dev
```

---

## 📈 Technical Achievements

* Implemented OAuth-based authentication workflow using Clerk
* Built scalable REST APIs with Express.js and MongoDB
* Integrated Cloudinary for cloud media management
* Developed real-time chat functionality using Socket.IO
* Designed responsive UI optimized for multiple screen sizes
* Deployed production-ready frontend and backend services

---

## 🎯 Learning Outcomes

This project demonstrates expertise in:

* Full-Stack Web Development
* Authentication & Authorization
* REST API Development
* Database Design
* Real-Time Communication
* Cloud Storage Integration
* Production Deployment
* State Management

---

## 👨‍💻 Author

Prince Singh
