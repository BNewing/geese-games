import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer `
	background-color: #F8E1A3;
	height: 100%;
	padding: 20px;
	text-align: center;
	margin-top: 2rem;
`

const Text = styled.small `
	text-align: center;	
	padding: 20px;
`

export default class Footer extends Component {
  	render() {
	    return (
	    	<div>
		    	<Wrapper>
			     	<Text>&#169; Beverley Newing, 2018 </Text>
			   	</Wrapper>
		   	</div>
    	);
  	}
}
