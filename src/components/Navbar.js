import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Notebook
          </Link>
            <Search/> 
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
