import { useEffect, useReducer, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const resp = await fetch(url);
				const user = await resp.json();
				setUser(user);
			} catch (error) {
				setIsError(true);
				console.log(error);
			}
			setIsLoading(false);
		};
		fetchUser();
	}, []);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	if (isError) {
		return <h2>Error...</h2>;
	}

	return (
		<>
			<h2>Fetch Data</h2>
			<div className='user-container'>
				<img
					src={user?.avatar_url}
					alt={user?.name}
				/>
				<div>
					<h2>{user?.name}</h2>
					<h3>works at: {user?.company}</h3>
					<p>{user?.bio}</p>
				</div>
			</div>
		</>
	);
};
export default MultipleReturnsFetchData;
