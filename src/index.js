import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router';
import styled from 'styled-components';
import './index.css';
import Home from './components/homepage/home';
import GeeseInfo from './components/geeseInfo/geese-info';
import DetailedGooseInfo from './components/geeseInfo/detailed-goose-info';
import Quiz from './components/quiz/quiz';
import registerServiceWorker from './registerServiceWorker';

const PageWrapper = styled.div `
	display: flex;
	min-height: 100vh;
	flex-direction: column;
`

export default class Root extends Component {
	render() {
		return (
			<HashRouter>
				<PageWrapper>
					<Route exact path="/" component={ Home } />
					<Route path="/geese-info" component={ GeeseInfo } />
					<Route path="/quiz" component={ Quiz } />
					<Route path="/goose-info/:url" render={(props) => <DetailedGooseInfo {...props}/>} />
				</PageWrapper>
			</HashRouter>
		)
	}

}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

