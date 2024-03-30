import { useState } from 'react';
import { data } from '../../../data';

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: 'peter',
		age: 24,
		hobby: 'read books',
	});

	const displayRandomPerson = () => {
		const randomPerson = data[Math.floor(Math.random() * data.length)];
		setPerson({
			name: randomPerson.name,
			age: randomPerson.age,
			hobby: randomPerson.hobby,
		});
	};

	const { name, age, hobby } = person;

	return (
		<>
			<h2>useState object example</h2>
			<h3>{name}</h3>
			<h3>{age}</h3>
			<h4>Enjoys: {hobby}</h4>
			<button
				className='btn'
				onClick={displayRandomPerson}
			>
				Click me
			</button>
		</>
	);
};

export default UseStateObject;
