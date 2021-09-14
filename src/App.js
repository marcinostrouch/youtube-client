import React from "react";
import { Layout } from "./components/layout/Layout";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Video } from "./components/video/Video";

import "./App.scss";

function App() {
  return (
    <Layout>
      <Video />
      <Sidebar />
    </Layout>
  );
}

export default App;
