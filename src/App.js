import React, { Fragment } from "react";

import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { GlobalStyle } from "./GlobalStyles";

export const App = () => (
  <Fragment>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </Fragment>
);
