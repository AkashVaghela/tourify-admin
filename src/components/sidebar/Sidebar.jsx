import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <Link to="/">Dashboard</Link>
      <Link to="passengers">passengers</Link>
      <Link to="tours">tours</Link>
      <Link to="attractions">attractions</Link>
      <Link to="employees">employees</Link>
      <Link to="buses">buses</Link>
      <Link to="settings">settings</Link>
    </div>
  );
};

export default Sidebar;
