import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

const Heading = styled.h1 `
	text-align: center;
	padding: 8px;
`

const DetailedList = styled.dl `
	width: 75%;
	margin: 2rem auto;
`

const DetailedListDt = styled.dt `
  font-weight: bold;
  padding: 1em 0 0.5em 0;
  font-size: 20px;
  color: #000;
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
    return (
    	<div>
        	<Nav />
        	<Wrapper>
        		<Button><StyledLink to="/geese-info">&#8592; Back to all the geese</StyledLink></Button>
        		<Heading>{quizQuestions[url].correctAnswer}</Heading>
        		<Image src={quizQuestions[url].image} alt={quizQuestions[url].correctAnswer}/>
            <DetailedList>
              <DetailedListDt>Latin name:</DetailedListDt>
              <dd>{quizQuestions[url].latinName}</dd>
              <DetailedListDt>Average weight:</DetailedListDt>
              <dd>{quizQuestions[url].averageWeight}</dd>
              <DetailedListDt>UK population:</DetailedListDt>
              <dd>{quizQuestions[url].ukPopulation}</dd>
              <DetailedListDt>General description:</DetailedListDt>
              <dd>{quizQuestions[url].description}</dd>
            </DetailedList>
          </Wrapper>
          <Footer />
      </div>
    );
  }
}