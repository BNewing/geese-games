import React, { Component } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div `	
	width: 30%;
	padding: 5px;
	display:inline-block;
`

const Image = styled.img `
	width: 100%;
	border-radius: 50%;
`

const Text = styled.p `
	text-align: center;
	font-size: 18px;
	background-color: #C0E6E2;
	padding: 8px;
	border: 1px solid black;
	border-radius: 5px;
`

export default class GooseBox extends Component {
  render() {
    return (
      <Wrapper>
        <Image src={this.props.image} alt={this.props.alt}/>
        <Text>{this.props.text}</Text>
      </Wrapper>
    );
  }
}