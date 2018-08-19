import React, { Component } from 'react';
import Nav from '../common/nav';
import Footer from '../common/footer';
import styled from 'styled-components';

import Question from './question';
import QuestionCounter from './questionCounter';
import AnswerOption from './answerOption';
import quizQuestions from './quizQuestions';

const Image = styled.img `
  margin: auto;
  display: block;
  border-radius: 50%;
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
       correctAnswer: '',
       selectedAnswer: '',
       numberCorrectAnswers: 0,
    };

      this.loadNextQuestion = this.loadNextQuestion.bind(this);
      this.checkAnswer = this.checkAnswer.bind(this);
      this.optionSelected = this.optionSelected.bind(this);
    };

    componentWillMount(){
      this.setState({
        question: quizQuestions[this.state.counter].question,
        image: quizQuestions[this.state.counter].image,
        correctAnswer: quizQuestions[this.state.counter].correctAnswer,
        answerOptions: quizQuestions[this.state.counter].answers
      });
    }

    checkAnswer(){
      if (this.state.selectedAnswer === this.state.correctAnswer) {
        this.setState({
          numberCorrectAnswers: this.state.numberCorrectAnswers +1
        })
      }
      this.loadNextQuestion();
      console.log(this.state);
    }

    loadNextQuestion() {
      this.setState({ 
        counter: this.state.counter + 1,  
        questionId: this.state.questionId +1,
        image: quizQuestions[this.state.counter].image,
        question: quizQuestions[this.state.counter].question,
        correctAnswer: quizQuestions[this.state.counter].correctAnswer,
        answerOptions: quizQuestions[this.state.counter].answers,
        selectedAnswer: ''
      });
    }
    
    optionSelected(e) { 
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
            <Image src={this.state.image} alt="goose" />
            <ul>
              {this.state.answerOptions.map((item,i) => <AnswerOption key={i} answer={item} handleChange={e=>this.optionSelected(e)}/>)}
            </ul>
            <button onClick={this.checkAnswer}>Submit</button>
          <Footer />
        </PageWrapper>

    );
  }
}
