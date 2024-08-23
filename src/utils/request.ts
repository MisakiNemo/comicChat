import axios from 'axios';

const request = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        type: 'application/json',
    }
});

export default request;