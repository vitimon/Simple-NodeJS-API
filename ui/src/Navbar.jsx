import React, { Component } from "react";

class Navbar extends Component {
  render() {    
    return (
      <div className="App-navbar">
      <p className="start">Menu</p>
      <p className="middle">🔴User Name</p>
      <p className="end">Sales Report</p>
      </div>
    );
  }
}

export default Navbar;