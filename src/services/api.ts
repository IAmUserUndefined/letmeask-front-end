import "dotenv/config";
import axios, { HeadersDefaults } from "axios";

export interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string | null | undefined; 
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Authorization": `Bearer ${localStorage.getItem("tokenLetmeAsk")}`
  }
});

export default api;