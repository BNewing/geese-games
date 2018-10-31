import React, { Component } from 'react';
import { Link } from "@reach/router";
import styled from 'styled-components';

const Wrapper = styled.nav `
	background-color: #F8E1A3;
	margin: 0;
	padding: 0;
`

const LinkWrapper = styled.li `
	list-style-type: none;
	display: inline-block;
	width: 33%;
	text-align: center;
	color: #817A96;
`

const ListWrapper = styled.ul `
	padding-left: 0;
`

const StyledLink = styled(Link) `
	text-decoration: none;
	color: #000000;
	font-size: 1.5rem;
`

export default class Nav extends Component {
  	render() {
	    return (
	     	<Wrapper>
		    <ListWrapper>
	        	<LinkWrapper><StyledLink to={process.env.PUBLIC_URL + "/"}>Home</StyledLink></LinkWrapper>
	        	<LinkWrapper><StyledLink to={process.env.PUBLIC_URL + "/geese-info"}>Geese Info</StyledLink></LinkWrapper>
	        	<LinkWrapper><StyledLink to={process.env.PUBLIC_URL + "/quiz"}>Quiz</StyledLink></LinkWrapper>
		   	</ListWrapper>
      		</Wrapper>
    );
  }
}
