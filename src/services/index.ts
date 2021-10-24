import axiosClient from './axiosClient';
import { CharactersClient } from './characterClient';
import { CharactersQuotesClient } from './characterQuotesClient';

const charactersClient = new CharactersClient(axiosClient.instance);
const charactersQuotesClient = new CharactersQuotesClient(axiosClient.instance);

const services = { charactersClient, charactersQuotesClient };
export default services;
