import React from "react";
import * as utils from "../Utils";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [{ type: "add", symbol: "+" }]
    };
  }

  render() {
    const { first, second, result } = this.state;
    const calc = func => {
      switch (func) {
        case "add":
          this.setState({ result: utils.add(first, second)});
          break;

        default:
          break;
      }
    };
    return (
      <div className="calcContainer">
        <div className="caclResult">{result}</div>
        <div className="calcNumbers">
          <label>Numbers</label>
          <div>
            <input
              value={first || ""}
              onChange={e => this.setState({ first: e.target.value })}
            />
          </div>

          <div>
            <input
              value={second || ""}
              onChange={e => this.setState({ second: e.target.value })}
            />
          </div>
        </div>
        <div className="caclFunctions">
          {this.state.options.map(opt => (
            <button
              key={opt.type}
              onClick={() => calc(opt.type)}
            >
              {opt.symbol}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
