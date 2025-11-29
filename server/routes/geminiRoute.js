import express from "express";
import { geminiAuth } from "../controllers/geminiAuth.js";
const route=express.Router()

route.get("/:userId",geminiAuth)

export default route;