import React from "react";
import Semaforo from "./Semaforo.jsx";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			

			<Semaforo />
			<div className="d-flex bg-secondary align-items-center justify-content-between .w-50" id="road">

				<div className="d-flex bg-warning align-items-center" id="line"></div>
				<div className="d-flex bg-warning align-items-center" id="linetwo"></div>
			</div>
			

		</div>
	);
};

export default Home;
