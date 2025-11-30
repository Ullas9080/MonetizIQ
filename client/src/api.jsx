import axios from "axios";

const api=axios.create({
    baseURL:"https://monetiz-iq-xslp.vercel.app/",
    timeout:5000,
    headers:{"Content-Type":"application/json"}
})

export default api;