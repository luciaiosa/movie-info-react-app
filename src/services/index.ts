import axiosClient from './axiosClient';
import { CharactersClient } from './characterClient';
import { StorageService } from './storageService';
import { CharactersQuotesClient } from './characterQuotesClient';

const charactersClient = new CharactersClient(axiosClient.instance);
const charactersQuotesClient = new CharactersQuotesClient(axiosClient.instance);
const storageService = new StorageService();

export default { charactersClient, charactersQuotesClient, storageService };
