import translations_es from '@translations/es/translations.json';
import translations_en from '@translations/en/translations.json';
import i18next, { i18n } from 'i18next';
import { Language } from '.';

export const initTranslationConfiguration = (
    defaultLenguage: Language
): i18n => {
    i18next.init({
        interpolation: { escapeValue: false },
        lng: defaultLenguage,
        resources: {
            EN: {
                translations: translations_en
            },
            ES: {
                translations: translations_es
            }
        }
    });
    return i18next;
};
