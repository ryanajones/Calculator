import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Buttons extends Component {
  render() {
    const {
      clearDisplay,
      updateDisplay,
      appendNumber,
      chooseOperation,
      deleteNum,
      compute,
    } = this.props;
    return (
      <div id="button-wrapper">
        <button
          type="button"
          onClick={() => {
            clearDisplay();
            updateDisplay();
          }}
          id="clear"
        >
          AC
        </button>
        <button type="button" onClick={deleteNum} id="delete">
          <i id="backspace" className="fas fa-backspace" />
        </button>
        <button
          type="button"
          onClick={() => {
            chooseOperation('/');
            updateDisplay();
          }}
          id="divide"
        >
          /
        </button>
        <button
          type="button"
          onClick={() => {
            chooseOperation('*');
            updateDisplay();
          }}
          id="multiply"
        >
          *
        </button>
        <button
          type="button"
          onClick={() => {
            chooseOperation('-');
            updateDisplay();
          }}
          id="subtract"
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            chooseOperation('+');
            updateDisplay();
          }}
          id="add"
        >
          +
        </button>
        <button
          type="button"
          onClick={e => {
            compute(e);
            updateDisplay();
          }}
          value
          id="equals"
        >
          =
        </button>
        <button
          type="button"
          onClick={e => {
            appendNumber(e);
            updateDisplay();
          }}
          value="."
          id="decimal"
        >
          .
        </button>
        <button
          type="button"
          onClick={e => {
            appendNumber(e);
            updateDisplay();
          }}
          value="0"
          id="zero"
        >
          0
        </button>
        <button
          type="button"
          onClick={e => {
            appendNumber(e);
            updateDisplay();
          }}
          value="1"
          id="one"
        >
          1
        </button>
        <button
          type="button"
          onClick={e => {
            appendNumber(e);
            updateDisplay();
          }}
          value="2"
          id="two"
        >
          2
        </button>
        <button
          type="button"
          onClick={e => {
            appendNumber(e);
            updateDisplay();
          }}
          value="3"
          id="three"
        >
          3
        </button>
        <button
          type="button"
          onClick={e => {
            appendNumber(e);
            updateDisplay();
          }}
          value="4"
          id="four"
        >
          4
        </button>
        <button
          type="button"
          onClick={e => {
            appendNumber(e);
            updateDisplay();
          }}
          value="5"
          id="five"
        >
          5
        </button>
        <button
          type="button"
          onClick={e => {
            appendNumber(e);
            updateDisplay();
          }}
          value="6"
          id="six"
        >
          6
        </button>
        <button
          type="button"
          onClick={e => {
            appendNumber(e);
            updateDisplay();
          }}
          value="7"
          id="seven"
        >
          7
        </button>
        <button
          type="button"
          onClick={e => {
            appendNumber(e);
            updateDisplay();
          }}
          value="8"
          id="eight"
        >
          8
        </button>
        <button
          type="button"
          onClick={e => {
            appendNumber(e);
            updateDisplay();
          }}
          value="9"
          id="nine"
        >
          9
        </button>
      </div>
    );
  }
}

Buttons.propTypes = {
  clearDisplay: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
  appendNumber: PropTypes.func.isRequired,
  chooseOperation: PropTypes.func.isRequired,
  deleteNum: PropTypes.func.isRequired,
  compute: PropTypes.func.isRequired,
};
