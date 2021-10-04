import React from "react";
import * as headerStyles from "./header.module.scss";
import { Search } from "../search/Search";
import Logo from "../../assets/YouTube_logo.svg";

const Header = () => (
  <div className={headerStyles.headerContainer}>
    <img className={headerStyles.logo} src={Logo} alt="YouTube logo" />
    <Search />
  </div>
);

export { Header };
