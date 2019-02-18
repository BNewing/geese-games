import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Nav from '../common/nav';
import Header from './header';
import InfoImageLeft from './info-image-left';
import InfoImageRight from './info-image-right';
import Footer from '../common/footer';
import styled from 'styled-components';
import { Link } from "@reach/router";

const Wrapper = styled.main `
  margin:  0 auto;
  width: 60%;
  flex: 1 0 auto;
  @media (max-width: 50rem) {
      width: 80%;
  }
`

const StyledLink = styled(Link) `
  font-size: 1.125rem;
  background-color: #C0E6E2;
  margin: 0.25rem;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  text-align: center;
  text-decoration: none;
  color: #000000;
  display: inline-block;
  border: 1px solid #000000;
`

const CallToActionWrapper = styled.div `
  text-align: center;
  margin: 3em;
  padding: 1em;
  border-top: 0.0625rem solid #C0E6E2;
  flex-grow: 1;
  @media (max-width: 50rem) {
      margin: 0;
  }
`

export default class Home extends Component {
  render() {
    return (
      <DocumentTitle title="Home || Geese Games">
      <React.Fragment>
      	<Nav />
      	<Header />
      	<Wrapper>
        	<InfoImageLeft />
        	<InfoImageRight />
          <CallToActionWrapper>
            <h2>What next?</h2>
            <p>Go learn about geese and when you're ready, check out the quiz page!</p>
            <StyledLink to={process.env.PUBLIC_URL + "geese-info"}>Learn About geese</StyledLink>
            <StyledLink to={process.env.PUBLIC_URL + "/quiz"}>Take the quiz</StyledLink>
            <StyledLink to="//webdevbev.co.uk/blog/09-2018/building-geese-games.html">Read the tech blog post about the project</StyledLink>
          </CallToActionWrapper>
        </Wrapper>
        <Footer />
        </React.Fragment>
      </DocumentTitle>
    );
  }
}
