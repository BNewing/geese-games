import React, { Component } from 'react';

export default class InfoImageRight extends Component {
  render() {
    return (
      <div className="info-image-right clearfix">
        <div className="info-image-right--text">
          <h2 className="info-image-right--text__header">Why make this?</h2>
          <p className="info-image-right--text__text">I've always really liked angry animals, and whilst at university I often used to sit and watch the geese at the big lake on campus. It was one of my happy things and ever since, I've had a fondness for them. I used to like seeing how the habbits of the geese changed throughout the year, and after going to St James's park, I realised that there were loads of other types of geese beyond Canada geese. So I've decided to create this site as a light-hearted learning activity so that I learn more about geese, and also learn React and Redux at the same time.</p> 
          <button className="info-image-right--text__button">More info</button>
        </div>      
        <div className="info-image-right--image">
          <img className="info-image-right--image__image" src="https://thumb1.shutterstock.com/display_pic_with_logo/488002/524660629/stock-photo-geese-on-green-meadow-geese-and-goose-group-of-gray-geese-524660629.jpg" 
          alt="Cute goose" />
        </div>
      </div>
    );
  }
}
