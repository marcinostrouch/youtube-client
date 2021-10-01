import React from "react";
import * as headerStyles from "./header.module.scss";
import { Search } from "../search/Search";

const Header = () => (
  <div className={headerStyles.headerContainer}>
    <img
      className={headerStyles.logo}
      src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
      alt="YouTube logo"
    />
    <Search />
  </div>
);

export { Header };
