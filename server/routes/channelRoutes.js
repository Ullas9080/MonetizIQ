import e from "express"
import { getChannelStats } from "../controllers/channelStats.js"
const route=e.Router()

route.get("/channelStats",getChannelStats)

export default route;