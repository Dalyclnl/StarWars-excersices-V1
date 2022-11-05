import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light ">
		   <a className="navbar-brand" href="#"></a>
		   <img src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png" width="150" height="100" class="d-inline-block align-top" alt="100"></img>
			<span className="navbar-brand  ">React Boilerplate</span>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
