import React, { Component } from "react";

class RegularComp extends Component {
  render() {
    console.log("Regular Component render function called");
    return <div>Regular Component {this.props.day}</div>;
  }
}

export default RegularComp;
