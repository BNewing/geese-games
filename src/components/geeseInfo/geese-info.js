import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Nav from '../common/nav';
import IntroText from './intro-text';
import GooseBox from './goose-box';
import Footer from '../common/footer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import quizQuestions from '../../quizQuestions';

const PageWrapper = styled.div `
  width: 80%;
  margin: auto;
  flex: 1;
`

const CallToActionWrapper = styled.div `
  text-align: center;
  margin: 3em;
  padding: 1em;
  border-top: 1px solid #C0E6E2;
`

const Button = styled.button `
  font-size: 18px;
  background-color: #C0E6E2;
  margin: 5px;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-align: center;
`

const StyledLink = styled(Link) `
  text-decoration: none;
  color: black;
`

export default class GeeseInfo extends Component {
  render() {
    return (
      <DocumentTitle title="Geese Info || Geese Games">
        <div>
        	<Nav />	
        	<PageWrapper>
          	<IntroText />
              {quizQuestions.map((item,i) => <GooseBox url={i} text={item.correctAnswer} key={i} alt={item.correctAnswer} image={item.image} />)}
        	   <CallToActionWrapper>
              <p>Ready to test out your geese knowledge?</p>
              <Button><StyledLink to="/quiz">Take the quiz</StyledLink></Button>
             </CallToActionWrapper>
          </PageWrapper>
        <Footer />
        </div>
      </DocumentTitle>

    );
  }
}
