import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import {
    getCharactersRequestSuccess,
    setCharactersError,
    getCharacterByIdRequestSuccess,
    loadedMoreCharactersRequestSuccess
} from './Actions';
import services from '@services/index';
import { CharacterSearchRequest } from '@services/characterClient';
import { CharacterDetail } from './CharactersStore';

export function* getCharacters(action: AnyAction) {
    try {
        const request: CharacterSearchRequest = {
            startsAt: action.payload.startsAt,
            searchTerm: action.payload.searchTerm
        };
        const response: CharacterDetail[] = yield call(
            services.charactersClient.fetch,
            request
        );
        yield put(getCharactersRequestSuccess(response));
    } catch (error) {
        yield put(setCharactersError('Error'));
    }
}

export function* loadMoreCharacters(action: AnyAction) {
    try {
        const request: CharacterSearchRequest = {
            startsAt: action.payload.startsAt,
            searchTerm: action.payload.searchTerm
        };
        const response: CharacterDetail[] = yield call(
            services.charactersClient.fetch,
            request
        );
        yield put(loadedMoreCharactersRequestSuccess(response));
    } catch (error) {
        yield put(setCharactersError('Error'));
    }
}

export function* getCharacterById(action: AnyAction) {
    try {
        const character: CharacterDetail = yield call(
            services.charactersClient.fetchById,
            action.payload
        );
        yield put(getCharacterByIdRequestSuccess(character));
    } catch (error) {
        yield put(setCharactersError('Error'));
    }
}
