import { I18nextProvider } from 'react-i18next';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { initTranslationConfiguration } from '@translations/translation-config';
import App from './App';
import { Languages } from '@translations/languages';
import { store } from '@store/Store';

test('renders app title', () => {
    render(
        <Provider store={store}>
            <I18nextProvider i18n={initTranslationConfiguration(Languages.ES)}>
                <App />
            </I18nextProvider>
        </Provider>
    );
    const title = screen.getByText(/Breaking Bad/i);
    expect(title).toBeInTheDocument();
});

test('renders characters list spanish title', () => {
    const screen = render(
        <Provider store={store}>
            <I18nextProvider i18n={initTranslationConfiguration(Languages.ES)}>
                <App />
            </I18nextProvider>
        </Provider>
    );
    expect(screen.getByText('Listado de personajes')).toBeDefined();
});

test('renders characters list english title', () => {
    const screen = render(
        <Provider store={store}>
            <I18nextProvider i18n={initTranslationConfiguration(Languages.EN)}>
                <App />
            </I18nextProvider>
        </Provider>
    );
    expect(screen.getByText('Characters list')).toBeDefined();
});
