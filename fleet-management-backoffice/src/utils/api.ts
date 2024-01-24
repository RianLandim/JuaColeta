import axios from "axios";
import { redirect } from "next/navigation";

export const api = axios.create({
  baseURL: "http://localhost:3333/",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      redirect("/entrar");
    }

    return Promise.reject(error);
  }
);
