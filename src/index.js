import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router';

import './index.css';
import Home from './components/home';
import GeeseInfo from './components/geese-info';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
	return (
		<HashRouter>
			<div>
				<Route exact path="/" component={ Home } />
				<Route path="/geese-info" component={ GeeseInfo } />
			</div>
		</HashRouter>
	)
}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

