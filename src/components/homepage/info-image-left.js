import React, { Component } from 'react';
import styled from 'styled-components';

const ComponentWrapper = styled.div `
:before,
:after {
    content: " "; 
    display: table; 
    clear: both;
}
  display: block;
  margin: 40px 0;
  height: auto;
  *zoom: 1;
`

const ImageWrapper = styled.div `
  width: 30%;
  float: left;
`

const Image = styled.img `
  float:left;
  border-radius: 50%;
  width: 100%;
  padding: 3em 0;
`

const TextWrapper = styled.div `
  display: inline-block;
  width: 60%;
  float:right;
`


export default class InfoImageLeft extends Component {
  render() {
    return (
      <ComponentWrapper>
      	<ImageWrapper>
          <Image src="https://thumb1.shutterstock.com/display_pic_with_logo/488002/524660629/stock-photo-geese-on-green-meadow-geese-and-goose-group-of-gray-geese-524660629.jpg" alt="Cute goose" />
        </ImageWrapper>
        <TextWrapper>
          <h2>What is this website?</h2>
            <p>This site is an educational resource with a quiz - check out different types of geese on the 'Geese Info' and then test out what you've learnt on the 'Quiz' page!</p>
            <p>Technology-wise, this is a web app that I've built with React and designed myself. It's a fun little side project where I test out new technologies like styled-components, and practise bits of JavaScript that I'd like to get better at. I got all of the goose photos from Shutterstock and the info about the different types of geese is from Wikipedia and the RSPB website.</p>
          
        </TextWrapper>
      </ComponentWrapper>
    );
  }
}
