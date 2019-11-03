import React, { Component } from "react";
import About from "../components/About";
import Main from "../components/Main";
import Games from "../components/Games";
import Contact from "../components/Contact";
import Project from "../components/Projects";
import Navigation from "../components/Navigation";
import "../css/Home.css";

class Home extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor() {
		super();
		this.state = {
			route: "main"
		};
	}
	onNavigationClick = route => {
		this.setState({ route: route });
	};

	render() {
		return (
			<div className="main-screen">
				<Navigation onNavigationClick={this.onNavigationClick} />
				{this.state.route === "main" ? (
					<Main />
				) : this.state.route === "about" ? (
					<About />
				) : this.state.route === "projects" ? (
					<Project />
				) : this.state.route === "games" ? (
					<Games />
				) : (
					<Contact />
				)}
			</div>
		);
	}
}

export default Home;
