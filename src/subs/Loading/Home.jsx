import React, { useState } from "react";
import BasicCard from "./Card";
import SearchBar from "./SearchBar";
import "../App.css";

const Home = ({ selectedPage }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [loading, setLoading] = useState(false);
	// setLoading(true)
	// const [toolsData, setToolsData] = useState([]);

	const handleSearch = (term) => {
		setSearchTerm(term);
	};

	return (
		<div className="Home">
			<div className="App-header">
				<div className="App-home">
					<div className="Heading">
						<h1>
							all<span style={{ color: "#FFFDD0" }}>soft</span>
						</h1>
					</div>
					<div className="Subheading">
						An installation guide to every programming software and tool I use.
					</div>
					<div>
						<SearchBar onSearch={handleSearch} loading={loading} />
					</div>
				</div>
			</div>
			<div className="card-container">
				<BasicCard
					searchTerm={searchTerm}
					selectedPage={selectedPage}
					loading={loading}
				/>
			</div>
		</div>
	);
};

export default Home;
