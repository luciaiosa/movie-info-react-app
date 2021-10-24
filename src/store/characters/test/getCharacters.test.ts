import { runSaga } from 'redux-saga';
import services from '@services/index';
import { getCharacters } from '../Sagas';
import {
    GET_CHARACTERS,
    setCharactersError
} from '../Actions';

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
