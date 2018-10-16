import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
	width: 60%;
	margin: auto;
	padding-bottom: 3.125rem;
`

const Header = styled.h1 `
	text-align: center;
`

export default class IntroText extends Component {
  render() {
    return (
      <Wrapper>
      	<Header> Types of Geese</Header>
        <p>Want to learn more about the types of geese? You've come to the right place! Below are the different types of geese that are in the quiz. Check them out then head on over to the quiz to test what you've learnt!</p> 
      </Wrapper>

    );
  }
}