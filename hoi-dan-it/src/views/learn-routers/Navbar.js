import React, { Component } from "react";
import "./Navbar.scss";
import { NavLink, Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="topnav">
          <NavLink activeclassname="active" to="/">
            Home
          </NavLink>
          <NavLink activeclassname="active" to="/todo">
            Todo
          </NavLink>
        </div>
      </>
    );
  }
}
