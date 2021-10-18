import React, { FunctionComponent } from "react";
import { styles } from "./HomeStyles";

const Home: FunctionComponent = (): JSX.Element => {
    const classes = styles();

    return (
        <div className={classes.root}>
            MoviesList
        </div>
    );
};

export default Home;
