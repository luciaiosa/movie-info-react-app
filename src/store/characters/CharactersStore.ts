import settings from '../../appSettings.json';

export interface CharacterDetail {
    char_id: number;
    name: string;
    birthday: string;
    occupation: string[];
    img: string;
    status: string;
    appearance: number[];
    nickname: string;
    portrayed: string;
}

export interface SearchTerm {
    searchTerm: string;
}

export interface CharacterStore {
    readonly loading: boolean;
    readonly searchTerm: string;
    readonly startsAt: number;
    readonly showLoadMore: boolean;
    readonly characters: CharacterDetail[];
    readonly selectedCharacter: CharacterDetail | undefined;
    readonly hasError: boolean;
    readonly errorMessage: string;
}

export const InitialCharacterStore: CharacterStore = {
    loading: false,
    searchTerm: '',
    startsAt: settings.paginationConfig.indexStart,
    showLoadMore: false,
    characters: [],
    selectedCharacter: undefined,
    hasError: false,
    errorMessage: ''
};
