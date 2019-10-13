/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import * as utils from '../Utils';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [{ type: 'add', symbol: '+' }, { type: 'subtract', symbol: '-' }, { type: 'multiply', symbol: '*' }, { type: 'divide', symbol: '/' }],
    };
  }

  render() {
    const {
      first, second, result, options,
    } = this.state;
    const calc = (func) => {
      switch (func) {
        case 'add':
          this.setState({ result: utils.add(first, second) });
          break;

        default:
          break;
      }
    };
    return (
      <div className="calcContainer">
        <div>
          <h2>
Do some math,
            {this.props.name}
          </h2>
        </div>
        <div className="caclResult">{result}</div>
        <div className="calcNumbers">
          <label>Numbers</label>
          <div>
            <input
              data-test-id="first"
              value={first || ''}
              onChange={(e) => this.setState({ first: e.target.value })}
            />
          </div>

          <div>
            <input
              value={second || ''}
              onChange={(e) => this.setState({ second: e.target.value })}
            />
          </div>
        </div>
        <div className="caclFunctions">
          {options.map((opt) => (
            <button
              type="button"
              data-test-id={`button-${opt.type}`}
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

Calculator.defaultProps = {
  name: 'Buddy',
};

export default Calculator;
