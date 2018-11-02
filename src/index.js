import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router"
import './index.css';
import Home from './components/homepage/home';
import GeeseInfo from './components/geeseInfo/geese-info';
import DetailedGooseInfo from './components/geeseInfo/detailed-goose-info';
import Quiz from './components/quiz/quiz';
import NotFound from './404.js';
import registerServiceWorker from './registerServiceWorker';

export default class Root extends Component {
	render() {
		return (
				<React.Fragment>
				<Router>
					<Home path={process.env.PUBLIC_URL + "/"} />
					<GeeseInfo path={process.env.PUBLIC_URL + "/geese-info"} />
					<DetailedGooseInfo path={process.env.PUBLIC_URL + "/geese-info/:url"} />
					<Quiz path={process.env.PUBLIC_URL + "/quiz"} />
					<NotFound default />
				</Router>

				</React.Fragment>

		)
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

