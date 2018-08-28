import React, { Component } from 'react';
import Nav from '../common/nav';
import Footer from '../common/footer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

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
  text-align: center;
`

const Button = styled.button `
  font-size: 1.125rem;
  background-color: #C0E6E2;
  margin: 0 auto;
  padding: 12px 24px;
  border-radius: 8px;
  text-align: center;
`

const List = styled.ul `
  padding: 0;
`

const StyledLink = styled(Link) `
  text-decoration: none;
  color: black;
`

export default class GeeseInfo extends Component {
  constructor(props) {
    super(props);
      this.state = {
       counter: 0,
       questionId: 1,
       question: quizQuestions[0]["question"],
       image: quizQuestions[0].image,
       answerOptions: quizQuestions[0].answers,
       correctAnswer: quizQuestions[0].correctAnswer,
       selectedAnswer: '',
       numberCorrectAnswers: 0,
       quizCompleted: false
    };
  };

  checkAnswer = () => {
    this.updateCounter();
    if (this.state.selectedAnswer === this.state.correctAnswer) {
      this.setState((state) => ({
        numberCorrectAnswers: this.state.numberCorrectAnswers +1
      }))
    }
    alert("You chose " + this.state.selectedAnswer + ", and the correct answer is: " + this.state.correctAnswer);
    
    if (this.state.questionId < quizQuestions.length) {
        this.loadNextQuestion();
    } 
    else {
      this.setState ({
        image: '',
        question: '',
        answerOptions: [],
        quizCompleted: true
      })
    }
  };

  updateCounter = () => {
    this.setState((state) => ({ counter: this.state.counter + 1 }));
  }

  loadNextQuestion = () => {
    this.setState({counter: this.state.counter+1}, () => {
      this.setState({
        questionId: this.state.questionId +1,
        image: quizQuestions[this.state.counter].image,
        question: quizQuestions[this.state.counter].question,
        correctAnswer: quizQuestions[this.state.counter].correctAnswer,
        answerOptions: quizQuestions[this.state.counter].answers
      })
    })
  };
  
  optionSelected = (e) => { 
    this.setState({
      selectedAnswer: e
    })
  };

  render() {
    const htmlForCompleted = `<p>You got ${this.state.numberCorrectAnswers} out of ${this.state.questionId} questions right.</p>`

    const notCompleted = ``
    return (
      <DocumentTitle title="Quiz || Geese Games">
        <PageWrapper>
        	<Nav />	
          // { this.state.quizCompleted ? <QuizResults numberCorrectAnswers="" : <QuizQuestions counter=""/> }
            {this.state.quizCompleted ? <p>You got {this.state.numberCorrectAnswers} out of {this.state.questionId} questions right.</p> : (
            <QuestionCounter 
              counter={this.state.questionId} 
              total={quizQuestions.length} />
              )}
            {this.state.quizCompleted ? (<img alt="goslings running" src="https://media.giphy.com/media/jDmGFL9fHA4iA/giphy.gif" />) : <Question question={this.state.question}/>}
            {this.state.quizCompleted ? (<p>Go forth and spread alllll the learning about geese</p>) : (<Image src={this.state.image} alt="goose" />)}
            <List>
              {this.state.answerOptions.map((item,i) => <AnswerOption key={i} answer={item} handleChange={e=>this.optionSelected(e)}/>)}
            </List>
            {this.state.quizCompleted ? (<Button><StyledLink to="/geese-info">Go back to the geese info page</StyledLink></Button> ): (
            <Button onClick={this.checkAnswer}>Submit answer</Button>)}
          <Footer />
        </PageWrapper>
      </DocumentTitle>
    );
  }
}
