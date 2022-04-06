import React, { useState } from "react";

function Search(props) {
    const [search, setSearch] = useState("");

    const Search = (event) => {
        props.getBooksSearch(search);
      };
  return (
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Books</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
      onChange={(e) => setSearch(e.target.value)}/>
      <button className="btn btn-outline-success" type="submit" onClick={Search}>
          ค้นหา{" "}
        </button>
    </form>
  </div>
</nav>

  );
}

export default Search