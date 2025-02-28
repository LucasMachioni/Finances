import axios from "axios";
import BASE_URL from "./baseURL";

export const api = axios.create ({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type' : 'application/json',
    },
})