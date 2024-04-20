import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

export default function Header({ setCategoryFilter }) {
  return (
    <div>
      <SearchBar />
      <Navbar setCategoryFilter={setCategoryFilter} />
    </div>
  );
}
