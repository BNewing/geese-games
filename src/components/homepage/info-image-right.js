import React, { Component } from 'react';
import styled from 'styled-components';
import FeedingGeese from '../../images/feeding-geese.jpg';

const ComponentWrapper = styled.section `
  :before,
  :after {
      content: " "; 
      display: table; 
      clear: both;
  }
  display: block;
  margin: 2.5rem 0;
  height: auto;
`

const Image = styled.img `
  float: right;
  border-radius: 50%;
  width: 30%;
  padding: 3em 3em;
  padding-bottom: 1em;
`


export default class InfoImageRight extends Component {
  render() {
    return (
      <ComponentWrapper>
          <Image src={FeedingGeese} alt="Beverley hand-feeding some geese" />
          <h2>Why geese?</h2>
          <p>I've always really liked angry animals, and whilst at university I often used to sit and watch the geese at the big lake on campus. It was one of my happy things and ever since, I've had a fondness for them. I used to like seeing how the habits of the geese changed throughout the year, and after going to St James's park, I realised that there were loads of other types of geese beyond Canada geese. So, I figured that could be fun content for a learning project. Geese are totally underrated.</p>     
      </ComponentWrapper>
    );
  }
}
