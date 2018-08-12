import React, { Component } from 'react';

export default class Question extends Component {
  render() {
    return (
    	<div>
	      <h2>{this.props.content}</h2>
	    </div>
    );
  }
}