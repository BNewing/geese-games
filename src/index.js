import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router';

import './index.css';
import Home from './components/homepage/home';
import GeeseInfo from './components/geeseInfo/geese-info';
import Quiz from './components/quiz/quiz';

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
	return (
		<HashRouter>
			<div>
				<Route exact path="/" component={ Home } />
				<Route path="/geese-info" component={ GeeseInfo } />
				<Route path="/quiz" component={ Quiz } />
			</div>
		</HashRouter>
	)
}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

