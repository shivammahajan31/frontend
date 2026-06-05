import axios from "axios";

const api = axios.create({
  baseURL:
    "https://admin-moderator-backend-staging.up.railway.app/api",
});

export default api;