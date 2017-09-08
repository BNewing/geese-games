import React, { Component } from 'react';
import Nav from '../common/nav';
import Footer from '../common/footer';
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
