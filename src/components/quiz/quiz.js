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
       image: '',
       answerOptions: [],
       answer: '',
       correctAnswers: '',
       result: ''
      };
    };

    componentWillMount(){
      this.setState({
        question: quizQuestions[0].question,
        image: quizQuestions[0].image,
        answerOptions: quizQuestions[0].answers
      });
    }

    
    render() {

      return (
        <div>
        	<Nav />	
            
            <QuestionCounter 
              counter={this.state.questionId} 
              total={10} />
            <Question 
              question={this.state.question}/>
            <img src={this.state.image} alt="goose" />
            <ul>
            {console.log(this.state.answerOptions)}
            {this.state.answerOptions.map((item,i) => <li key={i}>{item}</li>)}
            
            </ul>
          <Footer />
        </div>

    );
  }
}
