import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import * as layoutStyles from "./layout.module.scss";

const Layout = ({ children }) => (
  <>
    <Header />
    <main className={layoutStyles.mainContainer}>{children}</main>
    <Footer />
  </>
);

export { Layout };
