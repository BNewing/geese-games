import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Nav from '../common/nav';
import Header from './header';
import InfoImageLeft from './info-image-left';
import InfoImageRight from './info-image-right';
import Footer from '../common/footer';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div `
  margin:  0 auto;
  width: 60%;
  flex: 1;
`

const Button = styled.button `
  font-size: 18px;
  background-color: #C0E6E2;
  margin: 5px;
  padding: 12px 24px;
  border-radius: 8px;
  text-align: center;
`

const StyledLink = styled(Link) `
  text-decoration: none;
  color: black;
`

const CallToActionWrapper = styled.div `
  text-align: center;
  margin: 3em;
  padding: 1em;
  border-top: 1px solid #C0E6E2;
`


export default class Home extends Component {
  render() {
    return (
      <DocumentTitle title="Home || Geese Games">
        <div>
        	<Nav />
        	<Header />
        	<Wrapper>
          	<InfoImageLeft />
          	<InfoImageRight />
            <CallToActionWrapper>
              <h2>What next?</h2>
              <p>Go learn about geese and when you're ready, check out the quiz page!</p>
              <Button><StyledLink to="geese-info">Learn About geese</StyledLink></Button>
              <Button><StyledLink to="/quiz">Take the quiz</StyledLink></Button>
              <Button><StyledLink to="https://webdevbev.co.uk/blog/09-2018/building-geese-games.html">Read the tech blog post about the project</StyledLink></Button>
            </CallToActionWrapper>
          </Wrapper>
          <Footer />

        </div>
      </DocumentTitle>
    );
  }
}
