import { CharacterDetail } from './CharactersStore';

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GOT_CHARACTERS = 'GOT_CHARACTERS';
export const LOAD_MORE_CHARACTERS = 'LOAD_MORE_CHARACTERS';
export const LOADED_MORE_CHARACTERS = 'LOADED_MORE_CHARACTERS';
export const GET_CHARACTER_BY_ID = 'GET_CHARACTER_BY_ID';
export const GOT_CHARACTER_BY_ID = 'GOT_CHARACTER_BY_ID';
export const CLEAR_SELECTED_CHARACTER = 'CLEAR_SELECTED_CHARACTER';
export const SET_CHARACTERS_ERROR = 'SET_CHARACTERS_ERROR';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_CHARACTERS = 'SET_CHARACTERS';
export const SET_STARTS_AT = 'SET_STARTS_AT';
export const SET_LOADING = 'SET_LOADING';

export const getCharactersRequest = (
    startsAt: number,
    searchTerm?: string
) => ({
    type: GET_CHARACTERS,
    payload: {
        startsAt,
        searchTerm
    }
});

export const loadMoreCharactersRequest = (
    startsAt: number,
    searchTerm?: string
) => ({
    type: LOAD_MORE_CHARACTERS,
    payload: {
        startsAt,
        searchTerm
    }
});

export const getCharactersRequestSuccess = (payload: CharacterDetail[]) => ({
    type: GOT_CHARACTERS,
    payload: payload
});

export const loadedMoreCharactersRequestSuccess = (
    payload: CharacterDetail[]
) => ({
    type: LOADED_MORE_CHARACTERS,
    payload: payload
});

export const getCharacterByIdRequest = (id: number) => ({
    type: GET_CHARACTER_BY_ID,
    payload: id
});

export const getCharacterByIdRequestSuccess = (payload: CharacterDetail) => ({
    type: GOT_CHARACTER_BY_ID,
    payload
});

export const clearSelectedCharacter = () => ({
    type: CLEAR_SELECTED_CHARACTER,
    payload: undefined
});

export const setCharactersError = (payload: string) => ({
    type: SET_CHARACTERS_ERROR,
    payload
});

export const setSearchTerm = (value: string) => ({
    type: SET_SEARCH_TERM,
    payload: value
});

export const setCharacters = (payload: CharacterDetail[]) => ({
    type: SET_CHARACTERS,
    payload
});

export const setStartsAt = (value: number) => ({
    type: SET_STARTS_AT,
    payload: value
});

export const setLoading = (value: boolean) => ({
    type: SET_LOADING,
    payload: value
});
