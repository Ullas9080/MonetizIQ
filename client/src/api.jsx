import axios from "axios";

const api=axios.create({
    baseURL:"https://monetiz-iq-fh2u.vercel.app/",
    headers:{"Content-Type":"application/json"}
})

export default api;