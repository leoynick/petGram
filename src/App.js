import React, { Fragment } from "react";

import { Logo } from "./components/Logo";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { GlobalStyle } from "./GlobalStyles";

export const App = () => (
  <Fragment>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </Fragment>
);
