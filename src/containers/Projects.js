import React from "react";
import "../css/project.css";
import ju from "../images/Ju.png";
import Card from "../components/projectCard";

const Project = () => {
	return (
		<div className="projects">
			<div className="topRightCorner"></div>
			<div className="projects">Projects</div>
			<div className="projectCards">
				<Card
					ProjectName="Ju-Family"
					Project_Link="https://ju-family.herokuapp.com"
					imageurl={ju}
				/>
				<Card
					ProjectName="Ju-Family"
					Project_Link="https://ju-family.herokuapp.com"
					imageurl={ju}
				/>
				<Card
					ProjectName="Ju-Family"
					Project_Link="https://ju-family.herokuapp.com"
					imageurl={ju}
				/>
				<Card
					ProjectName="Ju-Family"
					Project_Link="https://ju-family.herokuapp.com"
					imageurl={ju}
				/>
			</div>
		</div>
	);
};

export default Project;
