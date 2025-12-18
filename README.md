# 🎥 YouTube Monetization Analyzer

## 🌟 Overview

YouTube Monetization Analyzer is a full-stack web app that helps YouTube creators analyze their channel’s monetization potential and track performance metrics. It integrates seamlessly with YouTube Data API and YouTube Analytics API to fetch insights on views, subscribers, revenue, and more.

---

## 🚀 Features

* 📊 **Channel Statistics**: Lifetime subscribers, total views, video count
* 📈 **Analytics Metrics**: Views, likes, watch time, avg. view duration, impressions, CTR, subscriber growth
* 🌍 **Demographics**: Country-wise, device type, traffic source analysis
* 🎬 **Video Insights**: Titles, thumbnails, and performance metrics
* 💰 **Revenue Estimation**: CPM-based revenue calculations
* 📉 **Interactive Charts**: Visualized with Chart.js, Recharts, MUI Charts
* 🔐 **Authentication**: Secure login via Google OAuth
* 📱 **Responsive UI**: Built with React, Tailwind CSS, and Material-UI

---

## 🛠 Tech Stack

### Frontend (Client)

* **Framework**: React 19.2.0 + Vite
* **Styling**: Tailwind CSS 4.1.16, Material-UI 7.3.5
* **State Management**: Redux Toolkit, Jotai
* **Charts & Animations**: Chart.js, React-Chartjs-2, Recharts, MUI X-Charts, AOS, Motion, React-Type-Animation
* **Routing & HTTP**: React Router DOM, Axios
* **UI Enhancements**: Heroicons, Lucide React, React Icons, Three.js, React Toastify

### Backend (Server)

* **Runtime**: Node.js
* **Framework**: Express 5.1.0
* **Database**: MongoDB (via Mongoose)
* **Authentication**: Passport.js + Google OAuth 2.0, JWT, bcryptjs
* **APIs**: YouTube Data & Analytics, Google Gemini AI
* **Middleware**: CORS, Morgan, Cookie Parser, Express Session
* **Deployment**: Serverless (Vercel)

---

## 📁 Folder Structure

```
YouTube Monetization Analyzer/
├── client/        # Frontend React app
└── server/        # Backend Node.js app
```

---

## 🎨 Design & Colors

* **Background**: Dark gradient `#0d0d0d → #1a0033 → #4a148c → #1a0033 → #0d0d0d`
* **Text**: White `#ffffff`
* **Font**: Inter (sans-serif)
* **Theme**: Dark mode with purple accents

---

## ⚙️ Installation

### Prerequisites

* Node.js ≥16
* npm or yarn
* MongoDB (local/cloud)
* Google Cloud Console account for API keys

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```
PORT=5000
MONGODB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

Start the server:

```bash
npm start
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Open browser: `http://localhost:5173`

---

## 🧩 Usage

1. Login with Google OAuth
2. Navigate dashboard to view channel stats, analytics, and revenue estimates
3. Visualize metrics with interactive charts
4. Explore video insights and demographics

---

## 🔗 API Endpoints

* `GET /api/auth/google` – Start Google OAuth
* `GET /api/auth/google/callback` – OAuth callback
* `GET /api/channel-stats` – Fetch channel statistics & analytics
* `GET /api/gemini/*` – AI-powered insights

---

## ⚡ Deployment

### Frontend (Vercel)

* Build: `npm run build`
* Output: `dist`

### Backend (Vercel/Serverless)

* Entry point: `index.js`
* Wrap with `serverless-http` for deployment

---

## 🤝 Contributing

1. Fork repo
2. Create a branch
3. Make changes & test
4. Submit a pull request

---

## 📜 License

MIT License

---

## 🙏 Acknowledgments

* YouTube Data & Analytics API
* Google Gemini AI
* Open-source libraries used in the project
