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
				if (!resp.ok) {
					setIsError(true);
					setIsLoading(false);
					return;
				}
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
		return <h2>There was an error...</h2>;
	}
	const { name, bio, company, avatar_url } = user;
	return (
		<>
			<h2>Fetch Data</h2>
			<div className='user-container'>
				<img
					src={avatar_url}
					alt={name}
				/>
				<div>
					<h2>{name}</h2>
					<h3>works at: {company}</h3>
					<p>{bio}</p>
				</div>
			</div>
		</>
	);
};
export default MultipleReturnsFetchData;
