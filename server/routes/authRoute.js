import express from "express";
import { googleCallback,googleLogout } from "../controllers/authController.js";
import { getAuthUrl } from "../configs/googleOuth.js";

const router = express.Router();


router.get("/google", (req, res) => {
  const url = getAuthUrl();  
  res.redirect(url); 
});

router.get("/", googleCallback);

router.get("/logout",googleLogout)

export default router;
