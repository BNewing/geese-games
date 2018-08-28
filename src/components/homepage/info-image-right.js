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
  float: right;
`

const Image = styled.img `
  float:left;
  border-radius: 50%;
  width: 100%;
  padding: 3em 0;
  padding-bottom: 1em;
`

const TextWrapper = styled.div `
  display: inline-block;
  width: 60%;
  float: left;
`


export default class InfoImageRight extends Component {
  render() {
    return (
      <ComponentWrapper>
        <TextWrapper>
          <h2>Why make this?</h2>
          <p>At uni, I often used to sit and watch the Canada geese at the big lake on campus, and it became one of my happy things. I later visited St James Park in London, and saw lots of funky geese types there that I didn't recognise. So, I figured that could be fun content for a learning project. Geese are totally underrated.</p> 
        </TextWrapper>      
        <ImageWrapper>
          <Image src="https://thumb1.shutterstock.com/display_pic_with_logo/488002/524660629/stock-photo-geese-on-green-meadow-geese-and-goose-group-of-gray-geese-524660629.jpg" 
          alt="Cute goose" />
        </ImageWrapper>
      </ComponentWrapper>
    );
  }
}
