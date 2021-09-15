import React from "react";
import * as headerStyles from "./header.module.scss";
import { Search } from "../search/Search";

const Header = () => (
  <div className={headerStyles.headerContainer}>
    <h1>Youtube Client</h1>
    <Search />
  </div>
);

export { Header };
