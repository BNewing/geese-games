import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLink = styled(Link) `
  text-decoration: none;
  color: black;
`

const Button = styled.button `
  font-size: 1.125rem;
  background-color: #C0E6E2;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
`

export default class QuizResults extends Component {
  render() {
    return (
      <React.Fragment>
        <p>You got {this.props.numberCorrectAnswers} out of {this.state.questionId} questions right.</p>
        <img alt="goslings running" src="https://media.giphy.com/media/jDmGFL9fHA4iA/giphy.gif" />
        <p>Go forth and spread alllll the learning about geese</p>
        <Button><StyledLink to="/geese-info">Go back to the geese info page</StyledLink></Button>
      </React.Fragment>
    )
  }
}


