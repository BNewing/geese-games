import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router';

import './index.css';
import Home from './components/homepage/home';
import GeeseInfo from './components/geeseInfo/geese-info';
import DetailedGooseInfo from './components/geeseInfo/detailed-goose-info';
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
					<Route path="/goose-info/:url" component={DetailedGooseInfo} />} />
				</div>
			</HashRouter>
		)
	}

}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

