import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Nav from './components/common/nav';
import Footer from './components/common/footer';
import styled from 'styled-components';

const Wrapper = styled.main `
  margin:  0 auto;
  width: 60%;
  flex: 1 0 auto;
  text-align: center;
  @media (max-width: 50rem) {
      width: 80%;
  }
`

export default class NotFound extends Component {
  render() {
    return (
      <DocumentTitle title="404 || Geese Games">
      <React.Fragment>
      	<Nav />
      	<Wrapper>
          <h1>This page doesn't exist, sorry!</h1>
          <img src="https://media.giphy.com/media/8XMyUOavTAu6A/giphy.gif" alt="Geese being guided somewhere by marching band" />
        </Wrapper>
        <Footer />
        </React.Fragment>
      </DocumentTitle>
    );
  }
}
