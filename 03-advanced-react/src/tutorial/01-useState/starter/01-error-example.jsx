const Counter = () => {};

const ErrorExample = () => {
	let count = 0;
	const handleClick = () => {
		count = count + 1;
		console.log(count);
		return count;
	};
	return (
		<div>
			<h2>{count}</h2>
			<button
				type='button'
				className='btn'
				onClick={handleClick}
			>
				click me
			</button>
		</div>
	);
};

export default ErrorExample;
