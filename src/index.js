import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Router } from "@reach/router"
import './index.css';
import Home from './components/homepage/home';
import GeeseInfo from './components/geeseInfo/geese-info';
import DetailedGooseInfo from './components/geeseInfo/detailed-goose-info';
import Quiz from './components/quiz/quiz';
import registerServiceWorker from './registerServiceWorker';

export default class Root extends Component {
	render() {
		return (
				<React.Fragment>
				<Router>
					<Home path="/" />
					<GeeseInfo path="/geese-info">
						<DetailedGooseInfo path="/:url" />
					</GeeseInfo>
					<Quiz path="/quiz" />
				</Router>

				</React.Fragment>

		)
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

