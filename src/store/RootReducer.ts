import { combineReducers } from 'redux';
import { AppStore } from './app';
import { charactersReducer } from './characters';
import { charactersQuotesReducer } from './quotes/Reducers';

export const rootReducer = combineReducers<AppStore>({
    charactersStore: charactersReducer,
    charactersQuotesStore: charactersQuotesReducer
});
