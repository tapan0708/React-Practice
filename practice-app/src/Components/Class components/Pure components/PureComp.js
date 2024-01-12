import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure Component render function called");
    return <div>Pure Component {this.props.day}</div>;
  }
}

export default PureComp;
