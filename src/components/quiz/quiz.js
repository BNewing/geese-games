import React, { Component } from 'react';
import Nav from '../common/nav';
import Footer from '../common/footer';
import styled from 'styled-components';

import Question from './question';
import QuestionCounter from './questionCounter';
import AnswerOption from './answerOption';
import quizQuestions from './quizQuestions';

const Text = styled.p `
  text-align: center;
  padding-top: 2rem;
`

const Image = styled.img `
  padding: 5rem 0;
  margin: auto;
  display: block;
`


export default class GeeseInfo extends Component {
  constructor(props) {
    super(props);
      this.state = {
       counter: 0,
       questionId: 1,
       question: '',
       answerOptions: [],
       answer: '',
       correctAnswers: '',
       result: ''
      };
    };

    componentWillMount(){
      const answerOptions = quizQuestions.map((question[0].answer));

      this.setState({
        question: quizQuestions[0].question,
        answerOptions: answerOptions[0]
      });
    }

    
    renderAnswerOptions(){
      return (
        <AnswerOption
          answer={this.state.answer}
          questionId={this.state.questionId}
        />
    )}

    render() {

      return (
        <div>
        	<Nav />	
            <Question 
              question={this.state.question}/>
            <QuestionCounter 
              counter={this.state.questionId} 
              total={this.state.questionQuestions.length} />
            <ul>
              {this.state.answerOptions.map(this.renderAnswerOptions)}
            </ul>
          <Footer />
        </div>

    );
  }
}
