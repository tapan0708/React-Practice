import React, { Component } from "react";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Tapan",
    };

    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps() {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("LifeCycleA render");
    return <div>LifeCycleA</div>;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
  }
}

export default LifeCycleA;
