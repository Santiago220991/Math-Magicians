import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <div className="calculatordiv">
        <p className="display">0</p>
        <ul className="numbers">
          <li><button type="button">AC</button></li>
          <li><button type="button">+/-</button></li>
          <li><button type="button">%</button></li>
          <li><button type="button">7</button></li>
          <li><button type="button">8</button></li>
          <li><button type="button">9</button></li>
          <li><button type="button">4</button></li>
          <li><button type="button">5</button></li>
          <li><button type="button">6</button></li>
          <li><button type="button">1</button></li>
          <li><button type="button">2</button></li>
          <li><button type="button">3</button></li>
          <li id="zero"><button type="button">0</button></li>
          <li><button type="button">.</button></li>
        </ul>
        <ul className="operators">
          <li><button type="button">/</button></li>
          <li><button type="button">*</button></li>
          <li><button type="button">-</button></li>
          <li><button type="button">+</button></li>
          <li><button type="button">=</button></li>
        </ul>
      </div>
    );
  }
}

export default Calculator;
