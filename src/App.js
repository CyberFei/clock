import React from "react";

import Num from "./Num";
import "./App.css";

class App extends React.Component {
  state = {
    nowNumber: 0,
    nowDate: [0, 0, 0, 0],
    numbersPos: [
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 1
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1], // 2
      [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 3
      [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1], // 4
      [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 5
      [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 6
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 7
      [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 8
      [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1] // 9
    ]
  };

  componentDidMount() {
    const getDate = () => {
      let d = new Date();
      this.setState({
        nowNumber: d.getSeconds(),
        nowDate: [
          parseInt(d.getHours() / 10),
          d.getHours() % 10,
          parseInt(d.getMinutes() / 10),
          d.getMinutes() % 10
        ]
      });
    };
    getDate();
    setInterval(getDate, 1000);
  }

  numberEl = (number, black) => {
    let a = parseInt(number / 10);
    let b = number % 10;
    return (
      <div
        key={number}
        className={
          "number" +
          (black === 1 ? " sel" : "") +
          (number === this.state.nowNumber ? " hover" : "")
        }
      >
        {[
          Num(a, number === this.state.nowNumber, number + "-a"),
          Num(b, number === this.state.nowNumber, number + "-b")
        ]}
      </div>
    );
  };

  numbersEl = nums => {
    const { numbersPos } = this.state;

    let numberBlocks = [];
    for (let n = 0; n < 4; n++) {
      let numberLines = [];
      for (let y = 0; y < 5; y++) {
        let numbers = [];
        for (let x = 0 + n * 3; x < (n + 1) * 3; x++) {
          numbers.push(
            this.numberEl(x * 5 + y, numbersPos[nums[n]][(x * 5 + y) % 15])
          );
        }
        numberLines.push(
          <div className="number-line" key={"line-" + n + "-" + y}>
            {numbers}
          </div>
        );
      }
      numberBlocks.push(
        <div className="number-block" key={"block-" + n}>
          {numberLines}
        </div>
      );
    }
    return numberBlocks;
  };

  render() {
    return (
      <div className="App">
        <div className="clock">
          <div className="clock-con">{this.numbersEl(this.state.nowDate)}</div>
        </div>
      </div>
    );
  }
}
export default App;
