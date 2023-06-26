import React, { memo, Component } from "react";

class Try extends Component {
  interval;

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("안녕");
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <>
        <li>
          <div> {this.props.tryInfo.try}</div>
          <div>{this.props.tryInfo.result}</div>
        </li>
      </>
    );
  }
}

// const Try = memo(({ tryInfo }) => {
//   return (
//     <>
//       <li>
//         <div> {tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     </>
//   );
// });

Try.displayName = "Try";

export default Try;
