import React from 'react';
import '../css/progress.css';

function Progress() {
	return (
		<section className="progress">

			<div className="progress-overview">
				<h1 className="title">Progress Overview</h1>

				<div className="percentage">
					<h1 className="value">40<small>%</small></h1>
					<svg width="180px" height="180px" viewBox="0 0 180 180" x="0px" y="0px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
						<path id="back_path" pathLength="1" d="
								M90,10 
								A80,80 1,0,1 170,90 
								A80,80 1,0,1 90,170
								A80,80 1,0,1 10,90
								A80,80 1,0,1 90,10">
						</path>
						<path id="path" pathLength="1" d="
								M90,10 
								A80,80 1,0,1 170,90 
								A80,80 1,0,1 90,170
								A80,80 1,0,1 10,90
								A80,80 1,0,1 90,10">
						</path>
					</svg>
				</div>

				<div className="legend">
					<div className="element completed">
						<h5 className="marker">Completed</h5>
						<h3><strong>20</strong>hours</h3>
					</div>
					<div className="element left">
						<h5 className="marker">Left to go</h5>
						<h3><strong>30</strong>hours</h3>
					</div>
				</div>
			</div>

			<h1 className="section-title line"><span>Progress</span></h1>

			<div className="counter-elements">
				<div>
					<h4>Total Webinars</h4>
					<h1 className="float-value">9</h1>
				</div>

				<div>
					<h4>Pending Assignments</h4>
					<h1 className="float-value">0</h1>
				</div>

				<div>
					<h4>Total Units</h4>
					<h1 className="float-value">5</h1>
				</div>

				<div>
					<h4>Total Readings</h4>
					<h1 className="float-value">15</h1>
				</div>

				<div className="focus">
					<h3>Total Videos</h3>
					<h1 className="float-value">5</h1>
				</div>
			</div>

			<div className="confirmation-notification">
				<p><strong>Confirm your account details</strong> Please confirm your email and phone number. <span role="img" aria-label="Worried">&#x1F625;</span></p>
			</div>
		</section>
	);
}

export default Progress;
