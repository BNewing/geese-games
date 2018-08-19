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
        answerOptions: quizQuestions[this.state.counter].answers,
        correctAnswer: quizQuestions[this.state.counter].correctAnswer
      });        
      console.log(this.state);
    };

    checkAnswer(){
      if (this.state.selectedAnswer === this.state.correctAnswer) {
        this.setState({
          numberCorrectAnswers: this.state.numberCorrectAnswers +1
        })
      }
      setTimeout(alert("Correct answer: " + this.state.correctAnswer), 3000);
      
      if (!this.state.questionId < quizQuestions.length) {
          console.log(this.state.questionId, quizQuestions.length);
          this.loadNextQuestion();
          //this if statement doesn't ever trigger false
      } else {
        this.setState ({
          image: '',
          question: '',
          answerOptions: '',
        })
        
      }
      console.log(this.state);
    };

    loadNextQuestion() {
      // The first question data gets shown twice, but the counter still increases - so the final question number ends up being 10
      // The focus on one radio button isn't being removed between screens
      this.setState({ 
        counter: this.state.counter + 1,  
        questionId: this.state.questionId +1,
        image: quizQuestions[this.state.counter].image,
        question: quizQuestions[this.state.counter].question,
        correctAnswer: quizQuestions[this.state.counter].correctAnswer,
        answerOptions: quizQuestions[this.state.counter].answers,
        selectedAnswer: ''
      });
    };
    
    optionSelected(e) { 
      this.setState({
        selectedAnswer: e
      })
    };

    render() {
      return (
        <PageWrapper>
        	<Nav />	
            {this.state.questionId > quizQuestions.length ? (<p>Quiz completed! You got {this.state.numberCorrectAnswers} out of {this.state.questionId} questions right.</p>) : (<p>Quiz not completed</p>)}
            <QuestionCounter 
              counter={this.state.questionId} 
              total={quizQuestions.length} />
            <Question 
              question={this.state.question}/>
            <Image src={this.state.image} alt="goose" />
            <List>
              {this.state.answerOptions.map((item,i) => <AnswerOption key={i} answer={item} handleChange={e=>this.optionSelected(e)}/>)}
            </List>
            <Button onClick={this.checkAnswer}>Submit answer</Button>
          <Footer />
        </PageWrapper>
    );
  }
}
