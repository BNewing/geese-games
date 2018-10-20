import React, { Component } from 'react';
import Nav from '../common/nav';
import Footer from '../common/footer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Question from './question';
import quizQuestions from '../../quizQuestions';

quizQuestions.sort( () => Math.random() - 0.5);

const PageWrapper = styled.div`
    text-align: center;
    flex: 1;
`

const Button = styled.button`
    font-size: 1.125rem;
    background-color: #C0E6E2;
    margin: 0 auto;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-align: center;
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
            questionIndex: 0,
            quiz: quizQuestions,
            numberCorrectAnswers: 0,
            quizCompleted: false
        };
    };

    onAnswer = (isCorrect) => {
        this.setState({ numberCorrectAnswers: this.state.numberCorrectAnswers + (isCorrect ? 1 : 0)})
        setTimeout(() => {
            if (this.state.questionIndex === this.state.quiz.length - 1) {
                this.setState({
                    quizCompleted: true
                });
            }
            else {
                this.setState({
                    questionIndex: this.state.questionIndex + 1
                })
            }
        }, 5000)
    };

    renderQuiz() {
        const question = this.state.quiz[this.state.questionIndex];
        return (
            <React.Fragment>
                <p>Question {this.state.questionIndex + 1} of {this.state.quiz.length}</p>
                <Question key={this.state.questionIndex} question={question} onAnswer={this.onAnswer}/>
            </React.Fragment>
        );
    }

    renderCompleted() {
        return (
            <React.Fragment>
                <p>You got {this.state.numberCorrectAnswers} out of {this.state.quiz.length} questions right.</p>
                <img alt="goslings running" src="https://media.giphy.com/media/jDmGFL9fHA4iA/giphy.gif" />
                <p>Go forth and spread alllll the learning about geese</p>          
                <Button><StyledLink to="/geese-info">Go back to the geese info page</StyledLink></Button>
            </React.Fragment>
        );
    }

    render() {
        return (
            <DocumentTitle title="Quiz || Geese Games">
                <div>
                    <PageWrapper>
                        <Nav />
                        <HiddenHeader>Goose Quiz</HiddenHeader>
                        {this.state.quizCompleted ? this.renderCompleted() : this.renderQuiz()}  
                    </PageWrapper>
                    <Footer />
                </div>
            </DocumentTitle>
        );
    }
}
