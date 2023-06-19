import React, { PureComponent } from "react";

class Rendering extends PureComponent {
  state = {
    counter: 0,
  };

  //   shouldComponentUpdate(nextProps, nextState, nextContext) {
  //     if (this.state.counter !== nextState.counter) {
  //       return true;
  //     }
  //     return false;
  //   }

  onClick = () => {
    this.setState((prevState) => {
      //   return {
      //     counter: prevState.counter + 1,
      //   };
    });
  };
  render() {
    console.log(this.state.counter);
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default Rendering;
