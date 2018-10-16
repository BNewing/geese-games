import React, { Component } from 'react';
import Nav from '../common/nav';
import Footer from '../common/footer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Question from './question';
import QuestionCounter from './questionCounter';
import AnswerOption from './answerOption';
import quizQuestions from '../../quizQuestions';

const PageWrapper = styled.div`
  text-align: center;
  flex: 1;
`

const Image = styled.img`
  margin: auto;
  display: block;
  height: 15em;
  border-radius: 50%;
`

const Button = styled.button`
  font-size: 1.125rem;
  background-color: #C0E6E2;
  margin: 0 auto;
  padding: 12px 24px;
  border-radius: 8px;
  text-align: center;
`

const List = styled.ul`
  padding: 0;
  width: 20rem;
  margin: 0 auto;
  text-align: left;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const HiddenHeader = styled.h1 `
    position: absolute !important;
    height: 1px; width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
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
      quizAltText: quizQuestions[0].quizAltText,
      displayAnswer: false,
      numberCorrectAnswers: 0,
      quizCompleted: false
    };
  };

  optionSelected = (e) => {
    this.setState({
      selectedAnswer: e
    })
  };

  checkAnswer = () => {
    if (this.state.selectedAnswer === this.state.correctAnswer) {
      this.setState((state) => ({
        numberCorrectAnswers: this.state.numberCorrectAnswers + 1
      }))
    }
    this.displayRightAnswer();
    setTimeout(() => {
      if (this.state.questionId < quizQuestions.length) {
        this.clearSelection();
        this.loadNextQuestion();
      }
      else {
        this.setState({
          image: '',
          question: '',
          answerOptions: [],
          quizCompleted: true
        })
      }
      this.setState({
        displayAnswer: false
      })
    }, 5000)
    
  };

  clearSelection = () => {
    this.setState({
      selectedAnswer: '',
    })
  }
  loadNextQuestion = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
      this.setState({
        questionId: this.state.questionId + 1,
        image: quizQuestions[this.state.counter].image,
        question: quizQuestions[this.state.counter].question,
        correctAnswer: quizQuestions[this.state.counter].correctAnswer,
        answerOptions: quizQuestions[this.state.counter].answers,
        quizAltText: quizQuestions[this.state.counter].quizAltText
      })
    })
  };

  displayRightAnswer = () => {
    if (this.state.selectedAnswer === this.state.correctAnswer){
      let questionResult = "Correct - that is a " + this.state.selectedAnswer +"!";
      this.setState({
        displayAnswer: questionResult
      })
    }
    else {
      let questionResult = "Wrong - the goose is actually a " + this.state.correctAnswer;
      this.setState({
        displayAnswer: questionResult
      })
    }  
  }

  render() {
    return (
      <DocumentTitle title="Quiz || Geese Games">
      <div>
        <PageWrapper>
          <Nav />
          <HiddenHeader>Goose Quiz</HiddenHeader>
          {this.state.quizCompleted ? <p>You got {this.state.numberCorrectAnswers} out of {this.state.questionId} questions right.</p> : (
            <QuestionCounter
              counter={this.state.questionId}
              total={quizQuestions.length} />
              )}
            {this.state.quizCompleted ? (<img alt="goslings running" src="https://media.giphy.com/media/jDmGFL9fHA4iA/giphy.gif" />) : <Question question={this.state.question}/>}
            {this.state.quizCompleted ? (<p>Go forth and spread alllll the learning about geese</p>) : (<Image src={this.state.image} alt={this.state.quizAltText} />)}
            <List>
              {this.state.answerOptions.map((item,i) => <AnswerOption key={`${this.state.counter}/${i}`} answer={item} handleChange={e=>this.optionSelected(e)} isChecked={item === this.state.selectedAnswer}/>)}
            </List>
            {this.state.quizCompleted ? (<Button><StyledLink to="/geese-info">Go back to the geese info page</StyledLink></Button> ): (
            <Button onClick={this.checkAnswer}>Submit answer</Button>)}
            <p style={this.state.selectedAnswer === this.state.correctAnswer ? {color: '#3CB371'} : {color: '#FF0000'}} aria-live="polite">{this.state.displayAnswer}</p>
        </PageWrapper>
         <Footer />
         </div>
      </DocumentTitle>
    );
  }
}
