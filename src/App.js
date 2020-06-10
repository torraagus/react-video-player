import React from "react";
import ReactPlayer from "react-player";
import "./App.css";

function App() {
	return (
		<div className="App">
			<ReactPlayer
				controls
				width="900px"
				height="500px"
				url="https://www.youtube.com/watch?v=n2-w5v5LI2s"
			/>
		</div>
	);
}

export default App;
