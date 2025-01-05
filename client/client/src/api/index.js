 import axios from 'axios';

 export const axiosInstance = axios.create({
    baseURL: 'https://mybookings-backend-86qj.onrender.com',
    headers:{
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
    }
 })