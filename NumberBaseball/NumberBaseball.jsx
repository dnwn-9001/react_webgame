import React, { Component } from "react";

class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state.value);
  };

  onChangeInput = (e) => {
    this.setState(e.target.value);
  };

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="number"
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button type="submit">입력</button>
        </form>
        <div>시도 : {this.state.tries.length}</div>
        <ul>
          <li></li>
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
