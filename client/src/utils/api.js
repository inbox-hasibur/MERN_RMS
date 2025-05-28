import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    token: localStorage.getItem("token"),
  },
});

export default api;
