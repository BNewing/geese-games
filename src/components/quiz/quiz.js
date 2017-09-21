import React, { Component } from 'react';
import Nav from '../common/nav';
import Footer from '../common/footer';

import styled from 'styled-components';

const Text = styled.p `
  text-align: center;
  padding-top: 2rem;`

const Image = styled.img `
  padding: 5rem 0;
  margin: auto;
  display: block;
`


export default class GeeseInfo extends Component {
  render() {
    return (
      <div>
      	<Nav />	
          <Text> The goose quiz is currently being assembled... coming soon!</Text>
          <Image 
            src="https://media.giphy.com/media/jDmGFL9fHA4iA/giphy.gif" 
            alt="Gif of little goslings running across the screen" />
          <Footer />
      </div>

    );
  }
}
