import React, { Component } from 'react';
import { Route, Router, Link } from 'react-router-dom';

import Home from '../homePage/home';
import GeeseInfo from '../geeseTypes/geese-info';

export default class Nav extends Component {
  	render() {
	    return (
	    	<nav>
		     	<ul className="nav">
		        	<li className="nav--link"><Link to="/">Home</Link></li>
		        	<li className="nav--link"><Link to="/geese-info">Geese Info</Link></li>
		        	<li className="nav--link"><Link to="/quiz">Quiz</Link></li>
		      	</ul>
		   	</nav>
    );
  }
}
