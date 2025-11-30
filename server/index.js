import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./configs/db.js";
import authRoute from "./routes/authRoute.js";
import channelRoute from "./routes/channelRoutes.js";
import geminiRoute from "./routes/geminiRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "https://monetiz-iq.vercel.app",
    credentials: true,
  })
);

connectDB();
app.get("/", (req, res) => {
  res.send("Server is alive");
});
app.use("/oauth2callback", authRoute);
app.use("/api/channel", channelRoute);
app.use("/gemini", geminiRoute);

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running locally on port ${PORT}`));
}

export default app;