import axios from 'axios';

const KEY = 'AIzaSyANRMjP_vvtpKmLUouy-8CKz-qCtpCg5zU';
export default axios.create(
{
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});