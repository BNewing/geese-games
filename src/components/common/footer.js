import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer `
	background-color: #F8E1A3;
	padding: 1.25ren;
	text-align: center;
	margin-top: 2rem;
	flex-shrink: 0;
`

const Text = styled.small `
	text-align: center;	
	padding: 20px;
`

export default class Footer extends Component {
  	render() {
	    return (
	    	<Wrapper>
		     	<Text>&#169; Beverley Newing, 2018 </Text>
		   	</Wrapper>
    	);
  	}
}
