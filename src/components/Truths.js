import React, { Component } from "react";
import "../css/truth.css";

class Truths extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			aboutText: ""
		};
		console.log(this.state);
	}

	onEmailChange = event => {
		this.setState({ email: event.target.value });
		//console.log(this.state);
	};

	onAboutMeChange = e => {
		this.setState({ aboutText: e.target.value });
	};
	render() {
		return (
			<div className="addAboutme">
				<form>
					<table className="table" cellPadding="5px" cellSpacing="10px">
						<tbody>
							<tr>
								<td>Enter E-Mail id (Optional) : </td>
								<td>
									<input
										type="email"
										name="email"
										placeholder="Enter You Email"
										value={this.state.email}
										onChange={this.onEmailChange}
									/>
								</td>
							</tr>
							<tr>
								<td>
									Enter anything You want to add <br />
									in my About me page{" "}
								</td>
								<td>
									<textarea
										cols="50"
										rows="10"
										value={this.state.aboutText}
										onChange={this.onAboutMeChange}
										required
									>
										Enter Anything About me !
									</textarea>
								</td>
							</tr>
							<tr>
								<td colSpan="2">
									<center>
										<input type="submit" id="abtmebtn" value="Submit" />
									</center>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
			</div>
		);
	}
}

export default Truths;
