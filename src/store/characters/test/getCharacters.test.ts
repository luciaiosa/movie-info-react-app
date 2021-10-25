import { runSaga } from 'redux-saga';
import services from '@services/index';
import { getCharacters, getCharacterById } from '../Sagas';
import {
    GET_CHARACTERS,
    GET_CHARACTER_BY_ID,
    setCharactersError,
    getCharacterByIdRequestSuccess
} from '../Actions';
import * as mockedResponse from './mockedCharactersResponse.json';

describe('makeCharactersByIdApiRequest', () => {
    it('should call api and dispatch success action', async () => {
        const requestCharacters = jest
            .spyOn(services.charactersClient, 'fetchById')
            .mockImplementation((id = 1) =>
                Promise.resolve(mockedResponse.characters[0])
            );
        const dispatched: any = [];
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            getCharacterById,
            {
                type: GET_CHARACTER_BY_ID,
                payload: 1
            }
        );

        expect(requestCharacters).toHaveBeenCalledTimes(1);
        expect(dispatched[0]).toEqual(
            getCharacterByIdRequestSuccess(mockedResponse.characters[0])
        );
        requestCharacters.mockClear();
    });

    it('should call api and dispatch error action', async () => {
        const requestCharacters = jest
            .spyOn(services.charactersClient, 'fetchById')
            .mockImplementation(() => Promise.reject());
        const dispatched: any = [];
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            getCharacterById,
            {
                type: GET_CHARACTER_BY_ID,
                payload: 1
            }
        );

        expect(requestCharacters).toHaveBeenCalledTimes(1);
        expect(dispatched[0]).toEqual(setCharactersError('Error'));
        requestCharacters.mockClear();
    });
});

describe('makeCharactersApiRequest', () => {
    it('should call api and dispatch error action', async () => {
        const requestCharacters = jest
            .spyOn(services.charactersClient, 'fetch')
            .mockImplementation(() => Promise.reject());
        const dispatched: any = [];
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            getCharacters,
            {
                type: GET_CHARACTERS,
                payload: {
                    searchTerm: 'Walter White Jr',
                    limit: 1
                }
            }
        );

        expect(requestCharacters).toHaveBeenCalledTimes(1);
        expect(dispatched[0]).toEqual(setCharactersError('Error'));
        requestCharacters.mockClear();
    });
});
