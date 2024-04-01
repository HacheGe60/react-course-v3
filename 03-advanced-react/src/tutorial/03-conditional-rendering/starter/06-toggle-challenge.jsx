import { useState, useEffect } from 'react';

const ToggleChallenge = () => {
	const [value, setValue] = useState(false);

	const text = value ? 'Se prendió la luz' : 'Se apagó la luz';
	return (
		<>
			<h2>toggle challenge</h2>
			{/* //toggle */}
			<button
				className='btn'
				onClick={() => setValue(!value)}
			>
				{value ? 'on' : 'off'}
			</button>
			<h4>{text}</h4>
		</>
	);
};

export default ToggleChallenge;
