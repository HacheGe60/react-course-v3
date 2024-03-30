import { useState } from 'react';

//! counter example
/* const UseStateGotcha = () => {
	const [value, setValue] = useState(0);

	const handleClick = () => {
		setValue((currentState) => {
			const newState = currentState + 1;
			return newState;
		});
	};

	return (
		<>
			<h2>useState "gotcha"</h2>
			<h3>{value}</h3>
			<button
				className='btn'
				onClick={handleClick}
			>
				Click Me!
			</button>
		</>
	);
}; */

//! setTimeout example
const UseStateGotcha = () => {
	const [value, setValue] = useState(0);

	const handleClick = () => {
		setTimeout(() => {
			console.log('clicked the button');
			setValue((currentState) => {
				return currentState + 1;
			});
		}, 3000);
	};

	return (
		<>
			<h2>useState "gotcha"</h2>
			<h3>{value}</h3>
			<button
				className='btn'
				onClick={handleClick}
			>
				Click Me!
			</button>
		</>
	);
};

export default UseStateGotcha;
