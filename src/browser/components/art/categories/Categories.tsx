/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

import ArtNav from "../nav/ArtNav";
import CategoiesContainer from "./container/CategoriesContainer";

export interface CategoriesProps extends RouteComponentProps {}

const Categories = (props: CategoriesProps) => (
    <React.Fragment>
        <ArtNav />
        <CategoiesContainer {...props} />
    </React.Fragment>
);

export default Categories;
