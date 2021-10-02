import React from "react";
import { Header } from "../header/Header";
import * as layoutStyles from "./layout.module.scss";

const Layout = ({ children }) => (
  <>
    <Header />
    <main className={layoutStyles.mainContainer}>{children}</main>
  </>
);

export { Layout };
