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

const PageWrapper = styled.div `
  display: block;
  text-align: center;
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

      this.loadNextQuestion = this.loadNextQuestion.bind(this);
      this.checkAnswer = this.checkAnswer.bind(this);
    };

    componentWillMount(){
      this.setState({
        question: quizQuestions[this.state.counter].question,
        image: quizQuestions[this.state.counter].image,
        answerOptions: quizQuestions[this.state.counter].answers
      });
    }

    checkAnswer(){
      this.loadNextQuestion();
    }

    loadNextQuestion() {

      this.setState({ 
        counter: this.state.counter + 1,  
        questionId: this.state.questionId +1,
        image: quizQuestions[this.state.counter].image,
        question: quizQuestions[this.state.counter].question,
        answerOptions: quizQuestions[this.state.counter].answers,
      });
    }
    
    optionSelected(e) {
      console.log(this.state);
      this.setState({
        selectedAnswer: e
      })
    }

    render() {

      return (
        <PageWrapper>
        	<Nav />	
            
            <QuestionCounter 
              counter={this.state.questionId} 
              total={quizQuestions.length} />
            <Question 
              question={this.state.question}/>
            <img src={this.state.image} alt="goose" />
            <ul>
              {this.state.answerOptions.map((item,i) => <AnswerOption key={i} answer={item} handleChange={e=>this.optionSelected(e)}/>)}
            </ul>
            <button onClick={this.checkAnswer}>Submit</button>
          <Footer />
        </PageWrapper>

    );
  }
}
