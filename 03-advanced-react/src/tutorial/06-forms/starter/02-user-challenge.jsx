import { useState } from 'react';
import { data } from '../../../data';

const users = [...data];

const UserChallenge = () => {
	const [users, setUsers] = useState(data);
	const [name, setName] = useState('');
	console.log(users);

	let id = Date.now();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name) return;
		const newUser = { id, name };
		const updatedUsers = [...users, newUser];
		setUsers(updatedUsers);
		setName('');
	};

	const removeUser = (id) => {
		const updatedUsers = users.filter((user) => user.id !== id);
		setUsers(updatedUsers);
	};

	return (
		<div>
			<form
				className='form'
				onSubmit={handleSubmit}
			>
				<h4>Add User</h4>
				<div className='form-row'>
					<label
						htmlFor='name'
						className='form-label'
					>
						name
					</label>
					<input
						type='text'
						className='form-input'
						id='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<button
					type='submit'
					className='btn btn-block'
				>
					submit
				</button>
			</form>
			<h2>users</h2>
			{users.map((user) => {
				return (
					<div key={user.id}>
						<h4>{user.name}</h4>
						<button
							className='btn'
							onClick={() => removeUser(user.id)}
						>
							remove
						</button>
					</div>
				);
			})}
		</div>
	);
};
export default UserChallenge;
