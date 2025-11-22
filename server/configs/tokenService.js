import oauth2Client from "../configs/googleOuth.js";
import USERS from "../models/users.js";

export const getNewAccessToken = async (userId) => {
  const user = await USERS.findOne({ userId });
  if (!user || !user.refreshToken) throw new Error("Refresh token not found");

  oauth2Client.setCredentials({ refresh_token: user.refreshToken });


  const { token, res } = await oauth2Client.getAccessToken(); 

  if (!token) throw new Error("Failed to refresh access token");


  if (res && res.data && res.data.expires_in) {
    user.expire_date = Date.now() + res.data.expires_in * 1000;
    await user.save();
  }

  return token;
};
