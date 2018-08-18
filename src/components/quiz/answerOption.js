import React, { Component } from 'react';
import styled from 'styled-components';

const ListItem = styled.li `
  list-style: none;
`

export default class AnswerOption extends Component {
	constructor(props) {
		super(props);
		this.updateSelectedOption = this.updateSelectedOption.bind(this);
	}

	updateSelectedOption(e) {
		this.props.handleChange(e.target.value);
		//console.log(e.target.value)
	}
  render() {
    return (
	   	<ListItem>
	        <input
	          type="radio"
	          className="radioCustomButton"
	          name="radioGroup"
	          id={this.props.answer}
	          value={this.props.answer}
	          onChange={this.updateSelectedOption}
	        />
	        <label className="radioCustomLabel" htmlFor={this.props.answer}>
	          {this.props.answer}
	        </label>
	      </ListItem>
    );
  }
}