import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID OlrXHoaYtcmiOOgy3n64uTUVmqoSQyvDb2L-w-PVlCg",
  },
});
