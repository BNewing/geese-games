import React, { Component } from 'react';

export default class InfoImageLeft extends Component {
  render() {
    return (
      <div className="info-image-left clearfix">
      	<div className="info-image-left--image">
          <img className="info-image-left--image__image" src="https://thumb1.shutterstock.com/display_pic_with_logo/488002/524660629/stock-photo-geese-on-green-meadow-geese-and-goose-group-of-gray-geese-524660629.jpg" />
        </div>
        <div className="info-image-left--text">
          <h2 className="info-image-left--text__header">What are the Geese Games?</h2>
          <p className="info-image-left--text__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <button className="info-image-left--text__button">Learn About Geese</button>
          <button className="info-image-left--text__button">Quiz</button>
        </div>
      </div>
    );
  }
}
