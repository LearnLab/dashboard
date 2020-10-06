import React from 'react';
import ReactDOM from 'react-dom';

// Style
import './css/index.css';

// Import components
import Menu from './components/Menu';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Events from './components/Events';
import Activity from './components/Activity';
import Progress from './components/Progress';
import SearchForm from './components/SearchForm';

ReactDOM.render(
	<React.StrictMode>
		<Menu />
		<Header />
		<div className="search-box">
			<SearchForm/>
		</div>
		<Dashboard />
		<Events />
		<Activity />
		<Progress />
	</React.StrictMode>,
	document.getElementById('root')
);

