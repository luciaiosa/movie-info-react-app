import {
    CharactersQuotesStore,
    InitialCharactersQuotesStore
} from '@store/quotes';
import { CharacterStore, InitialCharacterStore } from '../characters';

export interface AppStore {
    charactersStore: CharacterStore;
    charactersQuotesStore: CharactersQuotesStore;
}

export const InitialAppStore: AppStore = {
    charactersStore: InitialCharacterStore,
    charactersQuotesStore: InitialCharactersQuotesStore
};
