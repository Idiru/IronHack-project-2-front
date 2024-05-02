import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

export default function Header({ setCategoryFilter }) {
  return (
    <div className="header">
      <SearchBar />
      <Navbar setCategoryFilter={setCategoryFilter} />
    </div>
  );
}
