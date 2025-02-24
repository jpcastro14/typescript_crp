import axios from "axios";

export const Api = axios.create({
    baseURL: "https://reqres.in/api/"
});

export const baseURL = 'http://172.16.239.177:8000/api/v1/chamados';

export const homeURL = 'http://192.168.0.16:8000/api/v1/chamados'
