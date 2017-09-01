import React, { Component } from 'react';


export default class GooseBox extends Component {
  render() {
    return (
      <div className="goose-box">
        <img className="goose-box--image" src={this.props.image} />
        <p className="goose-box--text">{this.props.text}</p>
      </div>
    );
  }
}