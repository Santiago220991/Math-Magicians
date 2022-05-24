import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.numbers = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
    this.numberbtn = [];
    this.operators = ['/', '*', '-', '+', '='];
    this.operatorsbtn = [];
    this.numbers.forEach((element) => {
      if (element !== '0') {
        this.numberbtn.push(<li><button type="button">{element}</button></li>);
      } else {
        this.numberbtn.push(<li id="zero"><button type="button">{element}</button></li>);
      }
    });
    this.operators.forEach((element) => {
      <li><button type="button">{element}</button></li>;
    });
  }

  render() {
    return (
      <div className="calculatordiv">
        <p className="display">0</p>
        <ul className="numbers">
          {this.numberbtn}
        </ul>
        <ul className="operators">
          {this.operatorsbtn}
        </ul>
      </div>
    );
  }
}

export default Calculator;
