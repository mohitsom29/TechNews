import React from "react";
import Stories from "./Stories";
import Pagination from "./Pagination";
import Search from "./Search";

import "./App.css";

const App = () => {
  return (
    <>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};

export default App;
