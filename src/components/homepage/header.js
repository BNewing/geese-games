import React, { Component } from 'react';
import styled from 'styled-components';
import GeeseFamily from '../../images/geese-family-2.jpg';

const Wrapper = styled.header `
  background-color: #FF9A35;
`

const Image = styled.div `
  text-transform: uppercase;
  background: url(${GeeseFamily}) no-repeat center;
  height: 15rem;
  background-size: cover;
  width: 100%;
`

const HeaderTextWrapper = styled.div `
  text-align: center;
  padding: 1.25rem;
`

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Image></Image>
      	<HeaderTextWrapper>
      		<h1>Geese Games</h1>
      	</HeaderTextWrapper>
      </Wrapper>
    );
  }
}
