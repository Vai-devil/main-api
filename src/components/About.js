import React from "react";
import "../css/About.css";

const About = ({ onAboutAddClicked }) => {
	return (
		<div className="about">
			<div className="profile">
				<div className="profileInfo">
					<div className="profileName">Vaibhav Heda</div>
					<div className="info">Developer | Gamer | Lazy</div>
				</div>
				<div className="profileImage"></div>
			</div>
			<div className="truths">
				<div className="tellTruth">
					{" "}
					About Me!
					<div className="tellTruth">
						{" "}
						Hey Guys help me complete this page. :)
					</div>
				</div>
				<div>
					<button onClick={onAboutAddClicked}>Add About Me</button>
				</div>
			</div>
			<div className="everythingAboutMe"></div>
		</div>
	);
};

export default About;
