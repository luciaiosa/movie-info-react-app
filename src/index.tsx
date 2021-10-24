import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './containers/app/App';
import { store } from './store/Store';
import { initTranslationConfiguration } from '@translations/translation-config';
import { I18nextProvider } from 'react-i18next';
import { Languages } from '@translations/languages';
import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <I18nextProvider i18n={initTranslationConfiguration(Languages.ES)}>
            <App />
        </I18nextProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
