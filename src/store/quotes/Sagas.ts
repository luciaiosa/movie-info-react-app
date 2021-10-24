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
        if (response.length === 0) {
            yield put(
                setCharacterQuoteError({
                    message: 'No characters quotes found'
                })
            );
        } else {
            yield put(getCharactersQuoteRequestSuccess(response));
        }
    } catch (error) {
        yield put(setCharacterQuoteError(error));
    }
}
