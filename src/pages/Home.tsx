import React, { useEffect, useState } from "react";
import Header from "../components/Header";
// import Carousel from "../components/Carousel";

import Categories from "../components/Categories";
import SearchBar from "./Searchbar";

const Home = () => {
  return (
    <div>
      <SearchBar />
      {/* <Carousel /> */}
      <Categories />
    </div>
  );
};

export default Home;
