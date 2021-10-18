import React, { FunctionComponent, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import "./MovieDetail.scss";
import { Link } from "react-router-dom";
import { homeRoute } from "@config/routes";
import {
    Card,
    Typography,
    Divider,
    Button,
} from "@material-ui/core";

type MovieDetailParams = { id: string };

const MovieDetail: FunctionComponent<RouteComponentProps<MovieDetailParams>> = (
    props
) => {

    return (
        <div className="character-detail">
            <div>
                <Link to={homeRoute()} className="link">
                    <Button variant="contained" color="primary" size="large">
                        Back to list
                    </Button>
                </Link>
            </div>
            <div>Character detail</div>
        </div>
    );
};

export default MovieDetail;
