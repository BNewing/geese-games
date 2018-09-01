import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router';

import './index.css';
import Home from './components/homepage/home';
import GeeseInfo from './components/geeseInfo/geese-info';
import GooseBox from './components/geeseInfo/goose-box';
import Quiz from './components/quiz/quiz';

import quizQuestions from './quizQuestions';

import registerServiceWorker from './registerServiceWorker';

export default class Root extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<Route exact path="/" component={ Home } />
					<Route path="/geese-info" component={ GeeseInfo } />
					<Route path="/quiz" component={ Quiz } />
					<Route path="/goose/:url" component={GooseBox} />
				</div>
			</HashRouter>
		)
	}

}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

