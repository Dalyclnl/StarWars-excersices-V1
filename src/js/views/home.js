import React from "react";
import "../../styles/home.css";
import Planetas from "../component/Planetas";
import Personajes from "../component/Personajes";
import Starships from "../component/Starships";


export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		
		<div>
			<Personajes/>
			<Planetas/>
			<Starships/>
		</div>
	
	</div>
);
