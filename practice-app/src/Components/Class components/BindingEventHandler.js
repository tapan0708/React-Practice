import React, { Component } from "react";

class BindingEventHandler extends Component {
  constructor() {
    super();

    this.state = {
      message: "Hey, I am event",
    };
  }

  // eventHandler = () => {
  //   this.setState({
  //     message: "setState",
  //   });
  // };

  eventHandler() {
    console.log(this);
    this.setState({
      message: "setState",
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>

        {/* <button className="btn btn-danger" onClick={this.eventHandler}>
          click
        </button> */}

        {/* <button
          className="btn btn-danger"
          onClick={this.eventHandler.bind(this)}
        > Click </button> */}

        <button
          className="btn btn-danger"
          onClick={() => {
            this.eventHandler();
          }}
        >
          click
        </button>
      </div>
    );
  }
}

export default BindingEventHandler;
