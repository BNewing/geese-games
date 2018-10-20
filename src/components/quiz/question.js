import React, { Component } from 'react';
import AnswerOption from './answerOption';
import styled from 'styled-components';

const List = styled.ul`
    padding: 0;
    width: 20rem;
    margin: 0 auto;
    text-align: left;
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
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-align: center;
`

export default class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedAnswer: undefined,
            isCorrect: undefined,
            hasAnswered: false
        }
    }

    optionSelected = (selectedAnswer) => {
        this.setState({
            selectedAnswer: selectedAnswer
        })
    }

    checkAnswer = () => {
        const isCorrect = this.state.selectedAnswer === this.props.question.correctAnswer;
        this.setState({
            hasAnswered: true,
            isCorrect: isCorrect
        });
        this.props.onAnswer(isCorrect);
    }

    renderAnswer() {
        if (this.state.isCorrect){
            return "Correct - that is a " + this.props.question.correctAnswer +"!";
        }
        else {
            return "Wrong - the goose is actually a " + this.props.question.correctAnswer;
        }  
    }

    render() {
        return (
            <div>
                <h2>{this.props.question.question}</h2>
                <Image src={this.props.question.image} alt={this.props.question.quizAltText} />
                {this.state.hasAnswered &&
                    <p style={{color: this.state.isCorrect ? '#3CB371' : '#FF0000'}} aria-live="polite">
                        {this.renderAnswer()}
                    </p>
                }
                <List>
                {this.props.question.answers.map((item,i) => {
                    return <AnswerOption 
                        key={i} 
                        answer={item} 
                        handleChange={this.optionSelected} 
                        isChecked={item === this.state.selectedAnswer} 
                        disabled={this.state.hasAnswered}
                    />
                })} 
                </List>
                <Button onClick={this.checkAnswer}>Submit answer</Button>
            </div>
        );
    }
}