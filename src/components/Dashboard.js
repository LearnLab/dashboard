import React from 'react';
import '../css/dashboard.css';

function Dashboard() {
	return (
		<section className="dashboard">
			<h1 className="section-title">Dashboard</h1>
			
			<div className="current-topic">
				<h6>Currently Learning</h6>
				<h3 className="flag english">English</h3>
			</div>

			<div className="reminder">
				<img src="/assets/images/Dashbi.png" className="dashboard-pet" alt="Dashboard Pet" />
				<h1>Welcome back, Clarence</h1>
				<p className="emoji-party">Ta-da! You're up to date.</p>
			</div>
		</section>
	);
}

export default Dashboard;
