import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Nav from '../common/nav';
import IntroText from './intro-text';
import GooseBox from './goose-box';
import Footer from '../common/footer';
import styled from 'styled-components';

import quizQuestions from '../../quizQuestions';

const PageWrapper = styled.div `
  width: 80%;
  margin: auto;
`

export default class GeeseInfo extends Component {
  displayGooseBoxes = () => {
    for (let i = 0; i < quizQuestions.length; i++){
      console.log(quizQuestions.length)
      let gooseName = quizQuestions[i].correctAnswer;
      let image = quizQuestions[i].image;
      <GooseBox text={gooseName} alt={gooseName} image={image} />
    }
  }
  render() {
    return (
      <DocumentTitle title="Geese Info || Geese Games">
        <div>
        	<Nav />	
        	<PageWrapper>
          	<IntroText />

            {quizQuestions.map((item,i) => <GooseBox text={item.correctAnswer} key={i} alt={item.correctAnswer} image={item.image} />)}

        	</PageWrapper>
        <Footer />
        </div>
      </DocumentTitle>

    );
  }
}
