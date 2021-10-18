import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { styles } from "./HeaderStyles";
import { homeRoute } from "@config/routes";

const Header: FunctionComponent = (): JSX.Element => {
    const classes = styles();

    return (
        <div className={classes.container}>
            <div className={classes.menuContainer}>
                <div className={classes.linkMenu}>
                    <Link to={homeRoute()} className={classes.link}>
                        <h3 className={classes.logoLink}>Movie Web App</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
