import React from "react";
import { Link, IndexLink  from "react-router";

const header = () => {
  <div className="text-center">
    <nav className="navbar navbar-default">
      <IndexLink to "/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to "library" activeClassName="active">Libraru</Link>
    </nav>
  </div>
};

export default Header;
