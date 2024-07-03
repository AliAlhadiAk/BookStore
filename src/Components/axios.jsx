import axios from "axios";
const api = axios.create({
    baseURL : "https://localhost:7189/api/Store/"
})
export default api;
