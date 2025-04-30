import axios from "axios";

const api = axios.create({
    baseURL: "http://144.22.129.72:81",
    //baseURL: "http://ip-do-seu-pc-aqui:3001",
    timeout: 10000
});

export default api;