import React, { Component } from 'react';

export default class QuestionCounter extends Component {
  render() {
    return (
	    <p>Question {this.props.counter} of {this.props.total}</p>
    );
  }
}