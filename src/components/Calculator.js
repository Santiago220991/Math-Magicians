import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0',
    };
    this.onClickBtn = this.onClickBtn.bind(this);
    this.numbers = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
    this.numberbtn = [];
    this.operators = ['÷', 'x', '-', '+', '='];
    this.operatorsbtn = [];
    this.numbers.forEach((element) => {
      if (element !== '0') {
        this.numberbtn.push(<li key={element}><button type="button" onClick={this.onClickBtn}>{element}</button></li>);
      } else {
        this.numberbtn.push(<li id="zero" key={element}><button type="button" onClick={this.onClickBtn}>{element}</button></li>);
      }
    });
    this.operators.forEach((element) => {
      this.operatorsbtn.push(<li key={element}><button type="button" onClick={this.onClickBtn}>{element}</button></li>);
    });
  }

  onClickBtn(event) {
    const disp = document.querySelector('.display');
    const { result } = this.state;
    const value = calculate(result, event.target.innerText);
    this.setState({ result: value });
    if (value.next !== null) {
      disp.textContent = value.next;
    } else {
      disp.textContent = value.total;
    }
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
