import React from 'react';
import '../css/activity.css';

function Activity() {
	return (
		<section className="activity">
			<h1 className="section-title line"><span>Activity</span></h1>

			<details className="activity-item">
				<summary>
					<img className="thumbnail" src="assets/images/icons/Followers@2x.png" alt="" />
					You have 5 new followers including <strong>Kathryn Crawford</strong> and <strong>Piper Shaw</strong>
				</summary>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id dolor sed leo luctus aliquet. Integer ut volutpat lorem. Quisque sed neque dui. Integer tempus sagittis rhoncus. Fusce ac tempus enim. Morbi elementum urna hendrerit, tempor est vitae, consectetur mauris. Praesent pellentesque turpis fringilla nulla sollicitudin, sed feugiat tortor ultrices.</p>
			</details>


			<details className="activity-item">
				<summary>
					<img className="thumbnail" src="assets/images/icons/Events@2x.png" alt="" />
					3 new events were added to your calendar
				</summary>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id dolor sed leo luctus aliquet. Integer ut volutpat lorem. Quisque sed neque dui. Integer tempus sagittis rhoncus. Fusce ac tempus enim. Morbi elementum urna hendrerit, tempor est vitae, consectetur mauris. Praesent pellentesque turpis fringilla nulla sollicitudin, sed feugiat tortor ultrices.</p>
			</details>

			<details className="activity-item">
				<summary>
					<img className="thumbnail" src="assets/images/icons/Assignments@2x.png" alt="" />
					You have 3 pending readings to complete
				</summary>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id dolor sed leo luctus aliquet. Integer ut volutpat lorem. Quisque sed neque dui. Integer tempus sagittis rhoncus. Fusce ac tempus enim. Morbi elementum urna hendrerit, tempor est vitae, consectetur mauris. Praesent pellentesque turpis fringilla nulla sollicitudin, sed feugiat tortor ultrices.</p>
			</details>

		</section>
	);
}

export default Activity;
