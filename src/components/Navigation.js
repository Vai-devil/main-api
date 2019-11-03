import React, { useEffect } from "react";
import "../css/Navigation.css";

const Navigation = ({ onNavigationClick }) => {
	useEffect(() => {
		const lis = document.querySelectorAll("li");
		const a = document.querySelectorAll("li a");
		for (let i = 0; i < lis.length; i++) {
			lis[i].addEventListener("click", function() {
				for (let i = 0; i < lis.length; i++) {
					lis[i].classList.remove("active");
					a[i].classList.remove("active-text");
				}
				this.classList.add("active");
				a[i].classList.add("active-text");
			});
		}
	});

	return (
		<div className="buttons-container">
			<ul>
				<li className="active" onClick={() => onNavigationClick("main")}>
					<a className="active-text" href="#/">
						<i className="fa fa-home " aria-hidden="true"></i>
					</a>
				</li>
				<li onClick={() => onNavigationClick("about")}>
					<a href="#/">
						<i className="fa fa-user-circle " aria-hidden="true"></i>
					</a>
				</li>
				<li onClick={() => onNavigationClick("projects")}>
					{" "}
					<a href="#/">
						<i className="fa fa-tasks" aria-hidden="true"></i>
					</a>
				</li>
				<li onClick={() => onNavigationClick("games")}>
					{" "}
					<a href="#/">
						<i className="fa fa-gamepad" aria-hidden="true"></i>
					</a>
				</li>
				<li onClick={() => onNavigationClick("contact")}>
					{" "}
					<a href="#/">
						<i className="fa fa-address-card" aria-hidden="true"></i>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
