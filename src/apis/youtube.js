import axios from 'axios';

const KEY = 'AIzaSyAOWe3tDPYnS7DaTsYL4ki0ixdp2faICCc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});