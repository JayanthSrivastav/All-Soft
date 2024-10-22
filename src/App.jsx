import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./subs/Navbar";
import Home from "./subs/Home";
import Footer from "./subs/Footer";
import NotFound from "./subs/NotFound";

import Ngrok from "./subs/Ngrok";
import Java from "./subs/Java";
import Maven from "./subs/Maven";
import Tomcat from "./subs/Tomcat";
import Spring from "./subs/Spring";
import MongoDB from "./subs/MongoDB";
import Postman from "./subs/Postman";
import Node from "./subs/Node";
import VSC from "./subs/VSC";
import GitHub from "./subs/GitHub";

import "./App.css";

function App() {
	const [selectedPage, setSelectedPage] = useState(null);

	return (
		<div className="App">
			<Navbar
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
				className="nav"
			/>
			<Routes>
				<Route exact path="/" element={<Home selectedPage={selectedPage} />} />
				<Route exact path="/ngrok" element={<Ngrok />} />
				<Route exact path="/java" element={<Java />} />
				<Route exact path="/maven" element={<Maven />} />
				<Route exact path="/tomcat" element={<Tomcat />} />
				<Route exact path="/spring-boot" element={<Spring />} />
				<Route exact path="/mongoDB" element={<MongoDB />} />
				<Route exact path="/postman" element={<Postman />} />
				<Route exact path="/nodejs" element={<Node />} />
				<Route exact path="/vsc" element={<VSC />} />
				<Route exact path="/github" element={<GitHub />} />

				<Route path="*" element={<NotFound />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
