import { takeLatest } from 'redux-saga/effects';
import {
    GET_CHARACTERS,
    getCharacters,
    GET_CHARACTER_BY_ID,
    getCharacterById,
    loadMoreCharacters,
    LOAD_MORE_CHARACTERS
} from './characters';
import { getCharactersQuotes, GET_QUOTE_BY_AUTHOR } from './quotes';

export function* rootSaga() {
    yield takeLatest(GET_CHARACTERS, getCharacters);
    yield takeLatest(LOAD_MORE_CHARACTERS, loadMoreCharacters);
    yield takeLatest(GET_CHARACTER_BY_ID, getCharacterById);
    yield takeLatest(GET_QUOTE_BY_AUTHOR, getCharactersQuotes);
}
