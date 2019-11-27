import React, { Component } from "react";
import About from "../components/About";
import Main from "../components/Main";
import Games from "../components/Games";
import Contact from "../components/Contact";
import Project from "./Projects";
import Navigation from "../components/Navigation";
import Truths from "../components/Truths";
import "../css/Home.css";

class Home extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor() {
		super();
		this.state = {
			route: "main",
			email: "",
			aboutText: ""
		};
		console.log(this.state);
	}

	onNavigationClick = route => {
		this.setState({ route: route });
	};

	onAboutAddClicked = route => {
		this.setState({ route: route });
	};
	render() {
		return (
			<div className="main-screen">
				<Navigation onNavigationClick={this.onNavigationClick} />
				{this.state.route === "main" ? (
					<Main />
				) : this.state.route === "about" ? (
					<About onAboutAddClicked={this.onAboutAddClicked} />
				) : this.state.route === "projects" ? (
					<Project />
				) : this.state.route === "games" ? (
					<Games />
				) : this.state.route === "contact" ? (
					<Contact />
				) : (
					<Truths />
				)}
			</div>
		);
	}
}

export default Home;
