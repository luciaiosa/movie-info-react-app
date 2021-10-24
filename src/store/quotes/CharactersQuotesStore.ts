export interface CharacterQuote {
    quote_id: number;
    quote: string;
    author: string;
    series: string;
}

export interface CharactersQuotesStore {
    readonly loading: boolean;
    readonly quotes: CharacterQuote[];
    readonly hasError: boolean;
    readonly errorMessage: string;
}

export const InitialCharactersQuotesStore: CharactersQuotesStore = {
    loading: false,
    quotes: [],
    hasError: false,
    errorMessage: ''
};
