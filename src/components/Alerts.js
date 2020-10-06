import React, { Component } from 'react';
import '../css/alerts.css';

const alerts = [
	{
		subject: 'You have a new session to re...', 
		date: 'Today, 10:30 AM', 
		image: '/assets/images/thumbnails/Tag.png'
	}, 
	{
		subject: 'You have a virtual session...', 
		date: 'Yesterday, 9:45 PM', 
		image: '/assets/images/thumbnails/Video.png'
	}, 
	{
		subject: 'You have a face to face sta...', 
		date: 'Yesterday, 10:00 PM', 
		image: '/assets/images/thumbnails/Users@3x.png'
	}
];

class Alerts extends Component {
	render() {
		return (
			<div className="alerts-pop">
				<div className="arrow"></div>

				{alerts.map((alertObj, index) => (
					<div key={ index } className="alert-element">
						<img src={ alertObj.image } alt="" />
						<h2 className="subject">{ alertObj.subject }</h2>
						<h3>{ alertObj.date }</h3>
					</div>
				))}
			</div>
		);
	}
}

export default Alerts;
