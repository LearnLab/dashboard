import React from 'react';
import '../css/dashboard.css';

function Dashboard() {
	return (
		<section className="dashboard">
			<h1 className="section-title">Dashboard</h1>
			
			<div className="current-topic">
				<h6>Currently Learning</h6>
				<h3 className="language">
					<img src="assets/images/thumbnails/Flag-US@2x.png" className="flag" alt="English Language" />
					English
				</h3>
			</div>

			<div className="reminder">
				<img src="assets/images/Dashbi.png" className="dashboard-pet" alt="Dashboard Pet" />
				<h1>Welcome back, Clarence</h1>
				<p className="emoji-party">Ta-da! You're up to date.</p>
			</div>
		</section>
	);
}

export default Dashboard;
