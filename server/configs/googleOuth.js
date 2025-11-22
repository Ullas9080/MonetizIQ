import { google } from "googleapis";
import dotenv from "dotenv";
dotenv.config();

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

export const youtubeScopes = [
  "https://www.googleapis.com/auth/youtube.readonly",
  "https://www.googleapis.com/auth/yt-analytics.readonly",
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
];

export const getAuthUrl = () =>
  oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",   
    scope: youtubeScopes,
    redirect_uri: process.env.REDIRECT_URI,
  });

export default oauth2Client;
