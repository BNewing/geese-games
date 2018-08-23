import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Nav from '../common/nav';
import Header from './header';
import InfoImageLeft from './info-image-left';
import InfoImageRight from './info-image-right';
import Footer from '../common/footer';

import styled from 'styled-components';

const Wrapper = styled.div `
  margin:  0 auto;
  width: 60%;
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
          </Wrapper>
          <Footer />

        </div>
      </DocumentTitle>
    );
  }
}
