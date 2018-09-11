import React, { Component } from 'react';
import styled from 'styled-components';

import { Radio } from 'govuk-react'

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
	}
    render() {
	    return (<Radio
		          key={this.props.answer}
		          value={this.props.answer}
		          onChange={this.updateSelectedOption}
		          checked={this.props.isChecked}
		        >
		         {this.props.answer}
		        </Radio>
	    );
	}
}
