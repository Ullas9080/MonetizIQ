import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./configs/db.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

connectDB();            


app.use("/oauth2callback", authRoute);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server Started at ${PORT}`);
});
