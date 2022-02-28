import axios from "axios";

const url = "http://localhost:3030";

export const userRegister = (data) => axios.post(`${url}/register`, data);

export const userLogin = (data) => axios.post(`${url}/login`, data);
