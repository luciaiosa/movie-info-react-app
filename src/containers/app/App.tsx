import { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Container } from '@material-ui/core';
import { detailRoute, homeRoute } from '@config/routes';
import { AppStore } from '@store/app';
import { styles } from './AppStyles';
import Spinner from '@components/common/spinner/Spinner';
import Header from '@components/common/header/Header';
import CharacterDetail from '../detail/CharacterDetail';
import Footer from '@components/common/footer/Footer';
import Home from '../home/Home';
import { Language } from '@translations/languages';
import './App.scss';

const App: FunctionComponent = () => {
    const state = useSelector<AppStore, AppStore>((state) => state);
    const loading = state.charactersStore.loading;
    const classes = styles();
    const { i18n } = useTranslation('translations');

    const changeLanguage = (lang: Language) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className={classes.body}>
            {loading ? <Spinner /> : null}
            <BrowserRouter>
                <Switch>
                    <>
                        <Header changeLanguage={changeLanguage} />
                        <Container
                            maxWidth='xl'
                            style={{ paddingBottom: '5.5em' }}
                        >
                            <Route path={homeRoute()} exact component={Home} />
                            <Route
                                path={detailRoute()}
                                exact
                                component={CharacterDetail}
                            />
                        </Container>
                        <Footer content='❮❯ 2021' />
                    </>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
