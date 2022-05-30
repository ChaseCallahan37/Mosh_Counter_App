import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Counters:
          <span className="badge badge-pill badge-secondary">
            {this.props.count}
          </span>
        </a>
      </nav>
    );
  }
}

export default Header;
