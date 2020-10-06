import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Alerts from './Alerts';

import '../css/header.css';

// Image
import Logo from '../images/logo/Platform@2x.png';
import User from '../images/placeholders/Picture.png';

class Header extends Component {
	constructor() {
		super();

		this.showPopUp = this.showPopUp.bind(this);
		this.state = {
			opened: false
		};
	}

	showPopUp() {
		console.log('Clicked!');
		this.setState({
			opened: !this.state.opened
		});
	}

	render() {
		return (
			<header>
				<button type="button" className="menu_btn">
					<i className="venturit Menu"></i>
				</button>

				<img className="logo" src={ Logo } alt="Platform" />

				{/* Search Form for header */}
				<SearchForm/>

				<div className="user">
					<button type="button" className="alerts" onClick={ this.showPopUp }>
						<i className="venturit Alerts"></i>

						<Alerts opened={ this.state.opened }/>
					</button>

					<button type="button" className="chats">
						<i className="venturit Chat"></i>
					</button>

					<h3 className="name">Clarence Rusell</h3>

					<figure className="figure">
						<img className="picture" src={ User } alt="User" />
					</figure>

					<button type="button" className="more">
						<i className="venturit Arrow-Down"></i>
					</button>
				</div>
			</header>
		);
	}
}

export default Header;
