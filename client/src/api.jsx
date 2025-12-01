import axios from "axios";

const api=axios.create({
    baseURL:"https://monetiz-iq-odqj.vercel.app/",
    headers:{"Content-Type":"application/json"}
})

export default api;