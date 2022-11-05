import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light ">
		   <a class="navbar-brand" href="#"></a>
		   <img src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png" width="30" height="30" class="d-inline-block align-top" alt=""></img>
				<span className="navbar-brand  ">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
