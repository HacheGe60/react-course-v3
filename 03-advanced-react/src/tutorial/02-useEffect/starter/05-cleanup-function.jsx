import { useState, useEffect } from 'react';
const CleanupFunction = () => {
	const [toggle, setToggle] = useState(false);
	console.log('render');

	return (
		<>
			<h2>cleanup function</h2>
			<button
				className='btn'
				onClick={() => setToggle(!toggle)}
			>
				toggle component
			</button>
			{toggle && <RandomComponent />}
		</>
	);
};

const RandomComponent = () => {
	useEffect(() => {
		/* const intID = setInterval(() => {
			// console.log('hello from interval');
		}, 1000);
		return () => {
			clearInterval(intID);
			console.log('cleanup function ran');
		}; */
		const someFunc = () => {
			//some logic
		};
		window.addEventListener('scroll', someFunc);
		return () => {
			window.removeEventListener('scroll', someFunc);
		};
	}, []);
};
export default CleanupFunction;
