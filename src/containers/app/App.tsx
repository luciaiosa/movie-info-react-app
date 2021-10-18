import React, {FunctionComponent} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { detailRoute, homeRoute } from "@config/routes";
import { styles } from "./AppStyles";
import "./App.scss";
import Spinner from '@components/spinner/Spinner';
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';

const App: FunctionComponent = () => {
    const classes = styles();
    const loading = false;

    return (
        <div className={classes.body}>
            {loading ? <Spinner /> : null}
            <BrowserRouter>
                <Switch>
                    <>
                        <Header />
                        <Container
                            maxWidth="xl"
                            style={{ paddingBottom: "5.5em" }}
                        >
                            <Route path={homeRoute()} exact component={Home} />
                            <Route
                                path={detailRoute()}
                                exact
                                component={MovieDetail}
                            />
                        </Container>
                        <Footer content="❮❯ 2021" />
                    </>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
