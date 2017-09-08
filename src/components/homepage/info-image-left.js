import React, { Component } from 'react';

export default class InfoImageLeft extends Component {
  render() {
    return (
      <div className="info-image-left clearfix">
      	<div className="info-image-left--image">
          <img className="info-image-left--image__image" src="https://thumb1.shutterstock.com/display_pic_with_logo/488002/524660629/stock-photo-geese-on-green-meadow-geese-and-goose-group-of-gray-geese-524660629.jpg" alt="Cute goose" />
        </div>
        <div className="info-image-left--text">
          <h2 className="info-image-left--text__header">What is this website?</h2>
          <p className="info-image-left--text__text">This is a website built with React and (coming soon) Redux that I've build and designed myself. The 'Geese Info' page tells you all about different types of geese, and then on the quiz page, you get to test what you've learnt. It's a hobby website, and I add in functionality when I get the chance.</p>
          <button className="info-image-left--text__button">Learn About Geese</button>
          <button className="info-image-left--text__button">Quiz</button>
        </div>
      </div>
    );
  }
}
