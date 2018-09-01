import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import styled from 'styled-components';

import Nav from '../common/nav';
import Footer from '../common/footer';

import quizQuestions from '../../quizQuestions';

const Wrapper = styled.div `
  margin:  0 auto;
  width: 60%;
`

const Image = styled.img `
	width: 50%;
	border-radius: 50%;
	margin: 0 auto;
	display: block;
`

const Text = styled.h1 `
	text-align: center;
	padding: 8px;
`

const Button = styled.button `
  font-size: 18px;
  background-color: #C0E6E2;
  margin-top: 2em;
  padding: 12px 24px;
  border-radius: 8px;
  text-align: center;
`

const StyledLink = styled(Link) `
  text-decoration: none;
  color: black;
`

export default class DetailedGooseInfo extends Component {

  render() {
  	const {url} = this.props.match.params
	console.log();
    return (
    	<div>
        	<Nav />
        	<Wrapper>
        		<Button><StyledLink to="/geese-info">&#8592; Back to all the geese</StyledLink></Button>
        		<Text>{quizQuestions[url].correctAnswer}</Text>
        		<Image src={quizQuestions[url].image} alt={quizQuestions[url].alt}/>
          </Wrapper>
          <Footer />
      </div>
    );
  }
}