import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "../configs/db.js";
import authRoute from "../routes/authRoute.js";
import channelRoute from "../routes/channelRoutes.js";
import geminiRoute from "../routes/geminiRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "https://monetiz-iq.vercel.app",
    credentials: true,
  })
);

// Routes
app.use("/oauth2callback", authRoute);
app.use("/api/channel", channelRoute);
app.use("/gemini", geminiRoute);

// Correct Vercel Export
export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}
