import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000', // Sesuaikan dengan backend Anda
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;
