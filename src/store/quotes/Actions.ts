import { CharacterQuote } from './CharactersQuotesStore';

export const GET_QUOTE_BY_AUTHOR = 'GET_QUOTE_BY_AUTHOR';
export const GOT_QUOTE_BY_AUTHOR = 'GOT_QUOTE_BY_AUTHOR';
export const SET_QUOTES_ERROR = 'SET_QUOTES_ERROR';

export const getCharacterQuoteRequest = (payload: string) => ({
    type: GET_QUOTE_BY_AUTHOR,
    payload: payload
});

export const getCharactersQuoteRequestSuccess = (
    payload: CharacterQuote[]
) => ({
    type: GOT_QUOTE_BY_AUTHOR,
    payload: payload
});

export const setCharacterQuoteError = (payload: string) => ({
    type: SET_QUOTES_ERROR,
    payload
});
