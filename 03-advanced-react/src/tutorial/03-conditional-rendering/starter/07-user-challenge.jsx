import { useState } from 'react';

const UserChallenge = () => {
	// State to store user data
	const [user, setUser] = useState(null);

	// Login handler
	const handleLogin = () => {
		setUser({ name: 'John' }); // Simulate login with user data
	};

	// Logout handler
	const handleLogout = () => {
		setUser(null);
	};

	return (
		<>
			<h2>user challenge</h2>
			{user ? (
				<div>
					<h3>Hello, {user.name}!</h3>
					<button
						className='btn'
						onClick={handleLogout}
					>
						Logout
					</button>
				</div>
			) : (
				<div>
					<h3>Please login</h3>
					<button
						className='btn'
						onClick={handleLogin}
					>
						Login
					</button>
				</div>
			)}
		</>
	);
};

export default UserChallenge;
