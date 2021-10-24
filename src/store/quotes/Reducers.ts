import {
    InitialCharactersQuotesStore,
    CharactersQuotesStore
} from './CharactersQuotesStore';
import { Reducer, AnyAction } from 'redux';
import {
    GET_QUOTE_BY_AUTHOR,
    GOT_QUOTE_BY_AUTHOR,
    SET_QUOTES_ERROR
} from './Actions';

export const charactersQuotesReducer: Reducer<
    CharactersQuotesStore,
    AnyAction
> = (state = InitialCharactersQuotesStore, action) => {
    switch (action.type) {
        case GET_QUOTE_BY_AUTHOR:
            return {
                ...state,
                loading: true
            };
        case GOT_QUOTE_BY_AUTHOR:
            return {
                ...state,
                loading: false,
                quotes: action.payload,
                errorMessage: '',
                hasError: false
            };
        case SET_QUOTES_ERROR:
            return {
                ...state,
                loading: false,
                hasError: true,
                errorMessage: action.payload.message
            };
        default:
            return state;
    }
};
