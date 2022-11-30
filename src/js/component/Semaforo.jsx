import React, { useState } from "react";

const Semaforo = () => {
	const Allcolors = ["rojo", "amarillo", "verde"];

	const [ActiveChoice, setActiveChoice] = useState("");

	const colorSelector = (SelectedColor) => setActiveChoice(SelectedColor);

	const Lights = () =>
		Allcolors.map((ColorName, Index) => (
			<div
				key={Index}
				className={
					"circulo " +
					ColorName +
					(ActiveChoice === ColorName ? " sombra" : "")
				}
				onClick={() => colorSelector(ColorName)}></div>
		));

	const semaforoAutomatico = () => {
		let Index = 0;

		setInterval(() => {
			if (Index <= Allcolors.length) {
				colorSelector(Allcolors[Index]);
				Index++;
			} else {
				return false;
			}
		}, 500);
	};
	const anotherColor=(someColor)=>{
		
			Allcolors.push(someColor);
			Lights();

		};
		

	


	return (
	<>
			<br></br>
			<div
				className="d-flex flex-column justify-content-center align-items-center gap-2 m-auto p-2 bg-black"
				id="luces">
				{Lights()}
			</div>
			<div className="m-auto bg-warning" id="postedeluz"></div>
			<button onClick={() => { semaforoAutomatico() }} id="intervalo" type="button" className="btn btn-warning waves-effect px-3"><i class="fas fa-bolt" aria-hidden="true"></i></button>
			<button onClick={()=>{anotherColor("morado")}} id="newColor" type="button" class="btn btn-warning waves-effect"><i class="fas fa-star pr-2" aria-hidden="true"></i></button>






		</>
	);
};

export default Semaforo;