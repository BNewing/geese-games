import React, { Component } from 'react';
import { Link } from "@reach/router";
import styled from 'styled-components';

const Image = styled.img `
	width: 100%;
	border-radius: 50%;
`

const Text = styled.p `
	text-align: center;
	font-size: 1.125rem;
	background-color: #C0E6E2;
	padding: 0.5rem;
	border: 1px solid black;
	border-radius: 0.25rem;
`

const StyledLink = styled(Link) `
  text-decoration: none;
  color: black;
`

const ListItem = styled.li `
	text-decoration: none;
	width: 25%;
	padding: 2% 4%;
	display:inline-block;
	@media (max-width: 50rem) {
	    width: 40%;
	    margin: auto;
	}
	@media (max-width: 31.25rem) {
	    width: 80%;
		padding-bottom: 2rem;
	}
`

export default class GooseBox extends Component {
  render() {
    return (
    	<ListItem>
	      	<StyledLink to={process.env.PUBLIC_URL + "/geese-info/" + this.props.url}>
		        <Image src={this.props.image} alt={this.props.alt}/>
		        <Text>{this.props.text}</Text>
	     	</StyledLink>
     	</ListItem>
    );
  }
}