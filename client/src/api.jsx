import axios from "axios";

const api=axios.create({
    baseURL:"https://monetiz-iq-fh2u.vercel.app/",
    timeout:5000,
    headers:{"Content-Type":"application/json"}
})

export default api;