import React, { Component } from 'react';

export default class AnswerOption extends Component {
  render() {
    return (
	   	<li className="answerOption">
	        <input
	          type="radio"
	          className="radioCustomButton"
	          name="radioGroup"
	          checked={this.props.answerType === this.props.answer}
	          id={this.props.answer}
	          value={this.props.answer}
	        />
	        <label className="radioCustomLabel" htmlFor={this.props.answer}>
	          {this.props.answer}
	        </label>
	      </li>
    );
  }
}