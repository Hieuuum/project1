import React from "react";
import ResourceCard from "./components/ResourceCard";
import { resources } from "./data/resources";
import "./App.css";

function App() {
	return (
		<div className="app">
			<header className="site-header">
				<h1>CS Resource Board</h1>
				<p className="subtitle">
					A simple curated list of resources to learn computer science
				</p>
			</header>

			<main className="container">
				<div className="grid">
					{resources.map((r) => (
						<ResourceCard
							key={r.id}
							title={r.title}
							description={r.description}
						/>
					))}
				</div>
			</main>
		</div>
	);
}

export default App;
