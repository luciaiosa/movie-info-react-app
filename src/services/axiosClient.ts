import axios, { AxiosInstance } from 'axios';
import settings from '../appSettings.json';

class AxiosClient {
    public baseUrl: string;
    public instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: settings.breakingbadapi.url
        });
        this.baseUrl = settings.breakingbadapi.url;
    }
}

//Class singleton
export default new AxiosClient();
