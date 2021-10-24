import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import {
    getCharactersQuoteRequestSuccess,
    setCharacterQuoteError
} from './Actions';
import services from '@services/index';
import { CharacterQuote } from './CharactersQuotesStore';

export function* getCharactersQuotes(action: AnyAction) {
    try {
        const response: CharacterQuote[] = yield call(
            services.charactersQuotesClient.fetch,
            action.payload
        );
        yield put(getCharactersQuoteRequestSuccess(response));
    } catch (error) {
        yield put(setCharacterQuoteError('Error'));
    }
}
