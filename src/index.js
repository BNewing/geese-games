import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import './index.css';
import Home from './homePage/home';
import GeeseInfo from './geeseTypes/geese-info';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Route exact path="/" component={ Home } />
				<Route path="/geese-info" component={ GeeseInfo } />
			</div>
		</BrowserRouter>
	)
}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

