import React, { Component } from 'react';
import Nav from './nav';
import IntroText from './intro-text';
import GooseBox from './goose-box';
import Footer from './footer';
import './quiz.css';

export default class GeeseInfo extends Component {
  render() {
    return (
      <div>
      	<Nav />	
          <p className="quiz__text"> The goose quiz is currently being assembled... coming soon!</p>
          <img className="quiz__image" src="https://media.giphy.com/media/jDmGFL9fHA4iA/giphy.gif" />
          <Footer />
      </div>

    );
  }
}
