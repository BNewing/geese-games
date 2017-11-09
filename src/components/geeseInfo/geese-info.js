import React, { Component } from 'react';

import Nav from '../common/nav';
import IntroText from './intro-text';
import GooseBox from './goose-box';
import Footer from '../common/footer';
import styled from 'styled-components';

import geeseData from '../../geese.json';

const PageWrapper = styled.div `
  width: 80%;
  margin: auto;
`

export default class GeeseInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {   
    const showLargeGoose = () => {
      console.log("goose");
    }
    const gooseBoxes = geeseData.map(function(goose){
      return  <a onClick={showLargeGoose} key={goose.text} >
      <GooseBox 
        text={goose.text} 
        image={goose.image} 
        alt={goose.text} 
        /></a>
    })  

    return (
      <div>
      	<Nav />	
      	<PageWrapper>
        	<IntroText /> 
            <div onClick={this.handleClick}>
              {gooseBoxes}
            </div>
      	</PageWrapper>
      <Footer />
      </div>
    );
  }

}
