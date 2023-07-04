import React, { Component } from "react";
import Ball from "./Ball";

function getWinNumbers() {
  //   let arr = [];
  //   for (let i = 0; i < 8; i++) {
  //     const randomNum = Math.floor(Math.random() * 45) + 1;
  //     !arr.includes(randomNum)
  //       ? i === 6
  //         ? arr.push(randomNum)
  //         : arr.push(randomNum + ",")
  //       : "";
  //   }
  //   return arr;
  console.log("getWinNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

class Lotto extends Component {
  state = {
    winNumbers: getWinNumbers(),
    winBalls: [],
    bonus: null,
    redo: false,
  };

  cnt = 0;

  showBalls() {
    this.setState({
      // return {
      //   winBalls: [...prevState.winBalls, this.state.winNumbers[this.cnt]],
      // };
      redo: true,
    });
    this.cnt++;
  }

  onClickRedo() {}

  render() {
    const { winBalls, bonus, redo } = this.state;
    return (
      <>
        <div>당첨 숫자</div>
        <div id="결과창">
          {winBalls.map((v) => (
            <Ball key={v} number={v} />
          ))}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} />}
        <button onClick={redo ? onClickRedo : () => {}}>한 번 더!</button>
      </>
    );
  }
}

export default Lotto;
