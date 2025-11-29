import oauth2Client from "../configs/googleOuth.js";
import USERS from "../models/users.js";

export const getNewAccessToken = async (userId) => {
  const user = await USERS.findOne({ userId });
  if (!user || !user.refreshToken) throw new Error("Refresh token not found");

  oauth2Client.setCredentials({ refresh_token: user.refreshToken });


  const { credentials } = await oauth2Client.refreshAccessToken();

  if (!credentials.access_token) throw new Error("Failed to refresh access token");

  if (credentials.expiry_date) {
    user.expire_date = credentials.expiry_date;
    await user.save();
  }

  return credentials.access_token;
};
