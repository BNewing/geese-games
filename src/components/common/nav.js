import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav `
	background-color: #F8E1A3;
	margin: 0;
	padding: 16px;
`

const LinkWrapper = styled.li `
	list-style-type: none;
	display: inline-block;
	width: 33%;
	text-align: center;
	color: #817A96;
`

const StyledLink = styled(Link) `
	text-decoration: none;
	color: #000000;
	font-size: 25px;
`

export default class Nav extends Component {
  	render() {
	    return (
	     	<Wrapper>
	        	<LinkWrapper><StyledLink to="/">Home</StyledLink></LinkWrapper>
	        	<LinkWrapper><StyledLink to="/geese-info">Geese Info</StyledLink></LinkWrapper>
	        	<LinkWrapper><StyledLink to="/quiz">Quiz</StyledLink></LinkWrapper>
	      	</Wrapper>
    );
  }
}
