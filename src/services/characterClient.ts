import { AxiosInstance } from 'axios';
import { CharacterDetail } from '@store/characters';
import settings from '../appSettings.json';

export interface CharacterSearchRequest {
    startsAt: number;
    searchTerm?: string;
}

export class CharactersClient {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    fetch = async (
        searchRequest: CharacterSearchRequest
    ): Promise<CharacterDetail[]> => {
        const filter = {
            limit: settings.paginationConfig.numberPerPage,
            offset: searchRequest.startsAt,
            name: searchRequest?.searchTerm ? searchRequest.searchTerm : null
        };
        const response = await this.axios.get<CharacterDetail[]>(
            '/characters',
            {
                params: filter
            }
        );
        return response.data;
    };

    fetchById = async (id: number) => {
        const response = await this.axios.get<CharacterDetail>(
            `/characters/${id}`
        );
        return response.data;
    };
}
