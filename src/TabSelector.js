import React, { Component } from "react";

class TabSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.props.handleChange}
          className={this.props.activeId === "home" ? "active" : ""}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.props.handleChange}
          className={this.props.activeId === "about" ? "active" : ""}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.props.handleChange}
          className={this.props.activeId === "contact" ? "active" : ""}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
