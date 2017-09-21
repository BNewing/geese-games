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
  padding: 80px 0;
`

const TextWrapper = styled.div `
  display: inline-block;
  width: 60%;
  float:right;
`

const Button = styled.button `
  font-size: 18px;
  background-color: #C0E6E2;
  margin: 5px;
  padding: 12px 24px;
  border-radius: 8px;
  text-align: center;
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
          <p className="info-image-left--text__text">This is a website built with React and (coming soon) Redux that I've build and designed myself. The 'Geese Info' page tells you all about different types of geese, and then on the quiz page, you get to test what you've learnt. It's a hobby website, and I add in functionality when I get the chance.</p>
          <Button>Learn About Geese</Button>
          <Button>Quiz</Button>
        </TextWrapper>
      </ComponentWrapper>
    );
  }
}
