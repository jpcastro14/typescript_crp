import axios from "axios";

export const Api = axios.create({
    baseURL: "https://reqres.in/api/"
});

export const baseURL = 'http://172.28.248.82:8000/api/v1';
export const sectorURL = `http://172.28.248.82:8000/api/v1/sector`;

export const homeURL = 'http://192.168.0.16:8000/api/v1/chamados'
