import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  name: String,
  title: String,
  logo: String,
  refreshToken: String,   
  expire_date: Number,      
});

const USERS = mongoose.model("USERS", userSchema);
export default USERS;
