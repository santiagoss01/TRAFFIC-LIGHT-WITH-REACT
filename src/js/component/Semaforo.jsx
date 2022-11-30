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

	// const AutomaticCycle = () => {
	// 	let ColorIndex = 0;

	// 	setInterval(() => {
	// 		if (ColorIndex <= AvailableColors.length) {
	// 			HandleLight(AvailableColors[ColorIndex]);
	// 			ColorIndex++;
	// 		} else {
	// 			return false;
	// 		}
	// 	}, 500);
	// };

	// const AddNewLightColor = (NewColor) =>
	// 	setAvailableColors(
	// 		AvailableColors.includes(NewColor)
	// 			? AvailableColors.filter((ColorName) => ColorName !== NewColor)
	// 			: [...AvailableColors, NewColor]
	// 	);

	return (
		<>
		<br></br>		
			<div
				className="d-flex flex-column justify-content-center align-items-center gap-2 m-auto p-2 bg-black"
				id="luces">
				{Lights()}
			</div>
			<div className="m-auto bg-warning" id="postedeluz"></div>
			

		</>
	);
};

export default Semaforo;