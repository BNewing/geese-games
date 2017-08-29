import React, { Component } from 'react';
import Nav from '../components/nav';
import Header from './header';
import InfoImageLeft from './info-image-left';
import InfoImageRight from './info-image-right';
import Footer from '../components/footer';
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
      	<Nav />
      	<Header />
      	<div className="container">
        	<InfoImageLeft />
        	<InfoImageRight />
        </div>
        <Footer />

      </div>
    );
  }
}
