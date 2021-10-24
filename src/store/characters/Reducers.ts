import { InitialCharacterStore, CharacterStore } from './CharactersStore';
import { Reducer, AnyAction } from 'redux';
import {
    GET_CHARACTERS,
    GET_CHARACTER_BY_ID,
    LOAD_MORE_CHARACTERS,
    LOADED_MORE_CHARACTERS,
    GOT_CHARACTERS,
    GOT_CHARACTER_BY_ID,
    SET_SEARCH_TERM,
    CLEAR_SELECTED_CHARACTER,
    SET_CHARACTERS_ERROR,
    SET_CHARACTERS,
    SET_LOADING,
    SET_STARTS_AT
} from './Actions';
import settings from '../../appSettings.json';

export const charactersReducer: Reducer<CharacterStore, AnyAction> = (
    state = InitialCharacterStore,
    action
) => {
    switch (action.type) {
        case GET_CHARACTERS:
        case LOAD_MORE_CHARACTERS:
        case GET_CHARACTER_BY_ID:
            return {
                ...state,
                loading: true
            };
        case GOT_CHARACTERS:
            return {
                ...state,
                loading: false,
                characters: action.payload,
                startsAt:
                    action?.payload?.length > 0
                        ? state.startsAt +
                          settings.paginationConfig.numberPerPage
                        : state.startsAt,
                showLoadMore:
                    action?.payload?.length ===
                    settings.paginationConfig.numberPerPage,
                errorMessage: '',
                hasError: false
            };
        case LOADED_MORE_CHARACTERS:
            return {
                ...state,
                loading: false,
                characters:
                    action?.payload?.length > 0
                        ? [...state.characters, ...action.payload]
                        : [...state.characters],
                startsAt:
                    action?.payload?.length > 0
                        ? state.startsAt +
                          settings.paginationConfig.numberPerPage
                        : state.startsAt,
                showLoadMore:
                    action?.payload?.length ===
                    settings.paginationConfig.numberPerPage,
                errorMessage: '',
                hasError: false
            };
        case GOT_CHARACTER_BY_ID:
            return {
                ...state,
                loading: false,
                selectedCharacter: action.payload[0],
                showLoadMore: false,
                errorMessage: '',
                hasError: false
            };
        case CLEAR_SELECTED_CHARACTER:
            return {
                ...state,
                selectedCharacter: undefined
            };
        case SET_CHARACTERS_ERROR:
            return {
                ...state,
                loading: false,
                hasError: true,
                errorMessage: action.payload,
                showLoadMore: false
            };
        case SET_SEARCH_TERM:
            return { ...state, searchTerm: action.payload };
        case SET_CHARACTERS:
            return { ...state, characters: action.payload };
        case SET_STARTS_AT:
            return { ...state, startsAt: action.payload };
        case SET_LOADING:
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};
