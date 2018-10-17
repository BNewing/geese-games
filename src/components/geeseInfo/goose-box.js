import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div `	
	width: 25%;
	padding: 2% 4%;
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
	padding: 0.5rem;
	border: 1px solid black;
	border-radius: 0.25rem;
`

const StyledLink = styled(Link) `
  text-decoration: none;
  color: black;
`

export default class GooseBox extends Component {
  render() {
    return (
      	<StyledLink to={"/goose-info/" + this.props.url}>
      		<Wrapper>
	        	<Image src={this.props.image} alt={this.props.alt}/>
	        	<Text>{this.props.text}</Text>
	        </Wrapper>
     	</StyledLink>
    );
  }
}