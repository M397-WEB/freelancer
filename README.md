# Freelance Platform

A MERN‑stack freelance system with **Admin** and **Client** panels, built using **React with Vite** front-end and **Node.js + Express** backend, backed by **MongoDB**.

## 🔍 Project Overview

- **Admin (Developer)** panel:  
  - Add and manage technologies and showcase recent projects  
  - Review client orders and mark them as completed

- **Client** panel:  
  - View recent projects  
  - Place orders for services  
  - Track the order status in real-time

## 📁 Project Structure

freelance-platform/
├── backend/ # Express + MongoDB API
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── .env
│ └── server.js
├── frontend/ # React app powered by Vite
│ ├── src/
│ ├── public/
│ ├── vite.config.js
│ └── .env
└── README.md


## ⚙️ Prerequisites

- Node.js v18 or newer  
- npm, Yarn, or pnpm  
- MongoDB (local setup or Atlas cloud instance)

## 🚀 Getting Started

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Set PORT, MONGO_URI, JWT_SECRET
npm run dev
cd frontend
npm install
cp .env.example .env
# Set VITE_BACKEND_URL, e.g. http://localhost:5000
npm run dev

bash
Copy
Edit
