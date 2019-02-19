import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://the-bk-hairdressing.firebaseio.com/'
});

export default instance;