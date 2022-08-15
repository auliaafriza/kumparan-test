
import axios from "axios";

export const url = "https://jsonplaceholder.typicode.com/";

export const apiClient = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});
