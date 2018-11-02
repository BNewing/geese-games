import React, { Component } from 'react';
import { Link } from "@reach/router";
import styled from 'styled-components';
import Nav from '../common/nav';
import Footer from '../common/footer';
import quizQuestions from '../../quizQuestions';

const Wrapper = styled.div `
  margin:  0 auto;
  width: 60%;
  @media (max-width: 50rem) {
      width: 80%;
  }
`

const Image = styled.img `
	width: 50%;
	border-radius: 50%;
	margin: 0 auto;
	display: block;
  @media (max-width: 31.25rem) {
      width: 75%;
  }
`

const Heading = styled.h1 `
	text-align: center;
	padding: 0.5rem;
`

const DetailedList = styled.dl `
	width: 75%;
	margin: 2rem auto;
  @media (max-width: 50rem) {
      width: 100%;
  }
`

const DetailedListDt = styled.dt `
  font-weight: bold;
  padding: 1em 0 0.5em 0;
  font-size: 1.25rem;
  color: #000;
`

const Button = styled.button `
  font-size: 1.125rem;
  background-color: #C0E6E2;
  margin-top: 2em;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
`

const StyledLink = styled(Link) `
  text-decoration: none;
  color: black;
`

export default class DetailedGooseInfo extends Component {
  render() {
    const url = this.props.url;
    return (
    	<React.Fragment>
            <Nav />
            <Wrapper>
                <Button><StyledLink to={process.env.PUBLIC_URL + "/geese-info"}>&#8592; Back to all the geese</StyledLink></Button>
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
        </React.Fragment>
    );
  }
}