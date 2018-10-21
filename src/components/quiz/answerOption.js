import React, { Component } from 'react';
import { Radio } from 'govuk-react'

export default class AnswerOption extends Component {
	updateSelectedOption = (e) => {
		this.props.handleChange(e.target.value);
	}
  
    render() {
	    return (<Radio
		          key={this.props.answer}
		          value={this.props.answer}
		          onChange={this.updateSelectedOption}
		          checked={this.props.isChecked}
		          disabled={this.props.disabled}
		        >
		         {this.props.answer}
		        </Radio>
	    );
	}
}
