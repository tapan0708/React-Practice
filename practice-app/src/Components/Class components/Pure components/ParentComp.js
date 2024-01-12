import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";
import MemoComp from "../../Functional components/Memo/MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: "New Year 2024",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        day: "New Day",
      });
    }, 5000);
  }

  render() {
    // console.log("Parent Component render function called");
    return (
      <div>
        Parent Component
        {/* <RegularComp day={this.state.day} />
        <PureComp day={this.state.day} /> */}
        <MemoComp day={this.state.day} />
      </div>
    );
  }
}

export default ParentComp;
