import { useState } from 'react';

const ShortCircuitExamples = () => {
	// falsy
	const [text, setText] = useState('');
	// truthy
	const [name, setName] = useState('susan');
	const [user, setUser] = useState({ name: 'john' });
	const [isEditing, setIsEditing] = useState(false);

	return (
		<>
			<h2>short circuit - examples</h2>
			<h3>Falsy: {text || 'default value'}</h3> {/* Default value*/}
			<h3>Truthy: {name || 'default value'}</h3> {/* Susan */}
			{text && (
				<div>
					<h3>whatever return</h3>
					<h3>{name}</h3>
				</div>
			)}
			{/* {!text && (
				<div>
					<h3>whatever return</h3>
					<h3>{name}</h3>
				</div>
			)} */}
			{user && <SomeComponent name={user.name} />}
			<h2 style={{ margin: '1rem 0' }}>Ternary Operator</h2>
			<button className='btn'>{isEditing ? 'edit' : 'add'}</button>
			{user ? (
				<div>
					<h4>hello there user {user.name}</h4>
				</div>
			) : (
				<div>
					<h4>Please Login</h4>
				</div>
			)}
		</>
	);
};

const SomeComponent = ({ name }) => {
	return (
		<div>
			<h3>whatever return</h3>
			<h3>{name}</h3>
		</div>
	);
};

export default ShortCircuitExamples;
