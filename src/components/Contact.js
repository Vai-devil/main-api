import React from "react";
import "../css/Contact.css";

const Contact = () => {
	return (
		<div className="contactPage">
			<div className="bottomCorner"></div>
			<div className="contactHeading">
				Contact Me
				<br />
			</div>
			<div className="contacts">
				<div className="email">
					<b>E-Mail : </b>
					<a href="mailto:Vaibhav.heda799@gmail.com">Mail Me!</a>
				</div>
				<br />
				<div>
					<b>Instagram : </b>
					<a href="https://www.instagram.com/vai_heda/">@Vai_heda</a>
				</div>
				<br />
				<div>
					<b>Facebook : </b>
					<a href="https://www.facebook.com/vaibhavheda.36">Vaibhav Heda</a>
				</div>
				<br />
				<div>
					<b>Linked in : </b>
					<a href="https://www.linkedin.com/in/vaibhav-h-a5383b109/">Vaibhav</a>
				</div>
				<br />
				<div>
					<b>Github: </b>
					<a href="https://github.com/Vai-devil">Vai-devil</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
