import { AxiosInstance } from 'axios';
import { CharacterQuote } from '@store/quotes';

export class CharactersQuotesClient {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    fetch = async (author: string): Promise<CharacterQuote[]> => {
        const response = await this.axios.get<CharacterQuote[]>(
            '/quote/random',
            {
                params: { author }
            }
        );
        return response.data;
    };
}
