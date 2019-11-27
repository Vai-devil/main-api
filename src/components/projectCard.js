/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../css/project.css";

const Card = ({ ProjectName, Project_Link, imageurl }) => {
	return (
		<div className="card">
			<div className="projectName">
				<h2>{ProjectName}</h2>
			</div>
			<div className="cardimage">
				<a href={Project_Link}>
					<img src={imageurl} height="200px" width="300px" />
				</a>
			</div>
		</div>
	);
};

export default Card;
