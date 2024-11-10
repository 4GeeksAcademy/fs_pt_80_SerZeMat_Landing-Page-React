import React from "react";
import { Navbar } from "./navbar";
import { CardComponent } from "./card";
import { array } from "prop-types";
import { Jumbo } from  "./jumbotron";
import { Footer } from "./footer";



const Home = () => {
	const array = [1, 2, 3, 4]
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbo/>
			<div className= "container d-flex justify-content-between mb-4 p-0">	
				{array.map(el => <CardComponent/>)}
			</div>
			<Footer/>		
		</div>
	);
};

export default Home;
