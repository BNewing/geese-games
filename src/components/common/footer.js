import React, { Component } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div `
	background-color: #F8E1A3;
	height: 100%;
	padding: 0 20px;
`

const Text = styled.p `
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
