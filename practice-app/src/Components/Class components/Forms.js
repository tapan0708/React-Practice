import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      age: "",
      skill: "",
    };
  }

  render() {
    this.usernameHandler = (event) => {
      this.setState({
        username: event.target.value,
      });
    };

    this.ageHandler = (event) => {
      this.setState({
        age: event.target.value,
      });
    };

    this.skillHandler = (event) => {
      this.setState({
        skill: event.target.value,
      });
    };

    this.onSubmit = (event) => {
      console.log(this.state);
      event.preventDefault();
    };

    return (
      <>
        <form onSubmit={this.onSubmit}>
          <div className="d-flex flex-column justify-content-start gap-3">
            <div>
              <label className="fw-bold fs-5">Username</label>
              <input
                className="w-100"
                type="text"
                value={this.state.username}
                onChange={this.usernameHandler}
              ></input>
            </div>

            <div>
              <label className="fw-bold fs-5">Age</label>
              <input
                className="w-100"
                type="number"
                value={this.state.age}
                onChange={this.ageHandler}
              ></input>
            </div>

            <div>
              <label className="fw-bold fs-5">skill</label>
              <select
                className="w-100"
                value={this.state.skill}
                onChange={this.skillHandler}
              >
                <option>Angular</option>
                <option>React</option>
                <option>Java</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary fs-5s">
              submit
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Forms;
