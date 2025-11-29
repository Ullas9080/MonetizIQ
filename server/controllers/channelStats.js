import { getNewAccessToken } from "../configs/tokenService.js";
import oauth2Client from "../configs/googleOuth.js";
import axios from "axios";
import { google } from "googleapis";
import USERS from "../models/users.js";

const fetchAnalytics = async (access_token, params) => {
  const baseUrl = "https://youtubeanalytics.googleapis.com/v2/reports";
  const url = `${baseUrl}?${new URLSearchParams(params)}`;

  return await axios.get(url, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export const getChannelStats = async (req, res) => {
  try {
    const youtube = google.youtube({ version: "v3", auth: oauth2Client });
    const channelRes = await youtube.channels.list({
      part: "snippet",
      mine: true,
    });

    if (!channelRes.data.items || channelRes.data.items.length === 0) {
      return res.status(400).json({ error: "No channel found" });
    }

    const userId = channelRes.data.items[0].id;
    const access_token = await getNewAccessToken(userId);
    oauth2Client.setCredentials({ access_token });

    const createdAt =
      channelRes.data.items[0].snippet.publishedAt.split("T")[0];
    const endDate = new Date().toISOString().split("T")[0];

    const nonSubParams = {
      ids: "channel==MINE",
      startDate: createdAt,
      endDate: endDate,
      metrics: "views,likes,estimatedMinutesWatched,averageViewDuration",
      dimensions: "country",
      maxResults: 200,
    };
    const nonSubRes = await fetchAnalytics(access_token, nonSubParams);

    const responseData = { ...nonSubRes.data };

    const user = await USERS.findOne({ userId });
    if (user) {
      user.channelStats = responseData;
      await user.save()
    }
    return res.json({ data: responseData });
  } catch (error) {
    if (!internal) return res.status(500).json({ error });
    return res.status(500).json({ error: "Failed to fetch channel stats" });
  }
};
