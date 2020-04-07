import React, { Component } from 'react';
import './scss/main.scss';
import { Buttons } from './components/Buttons.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPrevOperand: '',
      displayCurrOperand: '0',
    };
    this.prevOperand = '';
    this.currentOperand = '0';
    this.operation = undefined;
    this.negativeOperation = false;
    this.equalUsed = false;
  }

  clearDisplay = () => {
    this.currentOperand = '0';
    this.prevOperand = '';
    this.operation = undefined;
    this.negativeOperation = false;
  };

  updateDisplay = () => {
    this.setState({
      displayCurrOperand:
        this.currentOperand === '-'
          ? '-'
          : this.getDisplayNumber(this.currentOperand),
    });

    if (this.operation != null) {
      this.setState({
        displayPrevOperand: `${this.getDisplayNumber(this.prevOperand)} ${
          this.operation
        }`,
      });
    } else {
      this.setState({ displayPrevOperand: '' });
    }
  };

  getDisplayNumber = number => {
    const stringNumber = number.toString();
    const integerNumber = parseFloat(stringNumber.split('.')[0]);
    const decimalNumber = stringNumber.split('.')[1];
    let integerDisplay;

    if (Number.isNaN(integerNumber)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerNumber.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }
    if (decimalNumber != null) {
      return `${integerDisplay}.${decimalNumber}`;
    }
    return integerDisplay;
  };

  chooseOperation = operator => {
    if (this.operation && this.negativeOperation) {
      this.currentOperand = '';
      this.operation = operator;
      return;
    }

    if (this.prevOperand !== '') {
      this.compute();
    }

    if (this.currentOperand !== '') {
      this.prevOperand = this.currentOperand;
    }

    this.currentOperand = '';

    if (this.operation && operator === '-') {
      this.negativeOperation = true;
      this.currentOperand = '-';
      return;
    }

    this.operation = operator;
  };

  compute = equalUsed => {
    if (equalUsed) {
      this.equalUsed = true;
    }
    const prev = parseFloat(this.prevOperand);
    const curr = parseFloat(this.currentOperand);
    let computation;
    if (Number.isNaN(prev) || Number.isNaN(curr)) return;
    switch (this.operation) {
      case '+':
        computation = prev + curr;
        break;
      case '-':
        computation = prev - curr;
        break;
      case '*':
        computation = prev * curr;
        break;
      case '/':
        computation = prev / curr;
        break;
      default:
        return;
    }

    this.currentOperand = computation;
    this.operation = undefined;
    this.prevOperand = '';
  };

  appendNumber = e => {
    const { value } = e.target;
    if (this.equalUsed === true) {
      this.currentOperand = value.toString();
      this.equalUsed = false;
      return;
    }
    if (this.currentOperand.includes('.') && value === '.') {
      return;
    }
    if (this.currentOperand === '0' && value === '.') {
      this.currentOperand = this.currentOperand.toString() + value.toString();
    } else if (this.currentOperand === '0' || this.equalUsed === true) {
      this.currentOperand = value.toString();
      this.equalUsed = false;
    } else {
      this.currentOperand = this.currentOperand.toString() + value.toString();
    }
  };

  deleteNum = () => {
    if (this.currentOperand === '0') {
      return;
    }
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    this.updateDisplay();
  };

  render() {
    const { displayCurrOperand, displayPrevOperand } = this.state;
    return (
      <div id="container">
        <div id="display-container">
          <div id="prev-operand">{displayPrevOperand}</div>
          <div id="display">{displayCurrOperand}</div>
        </div>
        <Buttons
          clearDisplay={this.clearDisplay}
          updateDisplay={this.updateDisplay}
          appendNumber={this.appendNumber}
          chooseOperation={this.chooseOperation}
          deleteNum={this.deleteNum}
          compute={this.compute}
        />
      </div>
    );
  }
}

export default App;
