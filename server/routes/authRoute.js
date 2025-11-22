import express from "express";
import { googleCallback } from "../controllers/authController.js";
import { getAuthUrl } from "../configs/googleOuth.js";

const router = express.Router();


router.get("/google", (req, res) => {
  const url = getAuthUrl();  
  res.redirect(url); 
});

router.get("/", googleCallback);

export default router;
