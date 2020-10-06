import React from 'react';
import SearchForm from './SearchForm';
import Alerts from './Alerts';
import '../css/header.css';

function Header() {
	return (
		<header>
			<button type="button" className="menu_btn">
				<i className="venturit Menu"></i>
			</button>

			<img className="logo" src="assets/images/logo/Platform@2x.png" alt="Platform" />

			{/* Search Form for header */}
			<SearchForm/>

			<div className="user">
				<button type="button" className="alerts" style={{ background: 'assets/images/icons/Notification@3x.png' }}>
					<i className="venturit Alerts"></i>

					<Alerts/>
				</button>

				<button type="button" className="chats">
					<i className="venturit Chat"></i>
				</button>

				<h3 className="name">Clarence Rusell</h3>

				<figure className="figure">
					<img className="picture" src="assets/images/placeholders/Picture.png" alt="User" />
				</figure>

				<button type="button" className="more">
					<i className="venturit Arrow-Down"></i>
				</button>
			</div>
		</header>
	);
}

export default Header;
