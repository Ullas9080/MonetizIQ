import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "../configs/db.js";
import authRoute from "../routes/authRoute.js";
import channelRoute from "../routes/channelRoutes.js";
import geminiRoute from "../routes/geminiRoute.js";

dotenv.config();

const app = express();
let isConnected = false;

async function initDB() {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
}

app.use(express.json());
app.use(
  cors({
    origin: ["https://monetiz-iq.vercel.app", process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.use("/oauth2callback", authRoute);
app.use("/api/channel", channelRoute);
app.use("/gemini", geminiRoute);

export default async function handler(req, res) {
  await initDB(); 
  return app(req, res);
}
