import React from "react";
import { useSelector } from "react-redux";
import * as sidebarStyles from "./sidebar.module.scss";

export const Sidebar = () => {
  const { searchResults } = useSelector(state => state);

  console.log("searchResults ===", searchResults);

  return (
    <div className={sidebarStyles.sidebarContainer}>
      <h2>Sidebar</h2>
    </div>
  );
};
