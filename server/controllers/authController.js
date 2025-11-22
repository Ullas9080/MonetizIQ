import axios from "axios";
import oauth2Client from "../configs/googleOuth.js";
import USERS from "../models/users.js";
import dotenv from 'dotenv'

dotenv.config()

export const googleCallback = async (req, res) => {
  try {
    const { code } = req.query;               
    if (!code) return res.status(400).send("Code missing");

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);   


    const expireInMs = tokens.expires_in ? tokens.expires_in * 1000 : null;
    const expire_date = expireInMs ? Date.now() + expireInMs : null;

    const channelRes = await axios.get(
      "https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true",
      { headers: { Authorization: `Bearer ${tokens.access_token}` } }
    );

    const channel = channelRes.data.items[0].snippet;
    const userId = channelRes.data.items[0].id;

    let user = await USERS.findOne({ userId });
    if (user) {
      user.name = channel.title;
      user.title = channel.description;
      user.logo = channel.thumbnails?.default?.url || "";

      if (tokens.refresh_token) user.refreshToken = tokens.refresh_token;
      user.expire_date = expire_date;
      await user.save();
    } else {
      user = new USERS({
        userId,
        name: channel.title,
        title: channel.description,
        logo: channel.thumbnails?.default?.url || "",
        refreshToken: tokens.refresh_token || null,
        expire_date,
      });
      await user.save();
    }


 return res.redirect(`${process.env.FRONTEND_URL}/home`);

  } catch (error) {
    console.error("Google callback error:", error);
    res.redirect(`${process.env.FRONTEND_URL}/`)}
}
