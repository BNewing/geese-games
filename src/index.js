import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
					<Home path={process.env.PUBLIC_URL + "/"} />
					<GeeseInfo path={process.env.PUBLIC_URL + "/geese-info"}>
						<DetailedGooseInfo path={process.env.PUBLIC_URL + "/:url"} />
					</GeeseInfo>
					<Quiz path={process.env.PUBLIC_URL + "/quiz"} />
				</Router>

				</React.Fragment>

		)
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

