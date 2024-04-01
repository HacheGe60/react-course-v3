import React from 'react';
import avatar from '../../../assets/default-avatar.svg';

export function Person({ name, nickName = 'n/a', images }) {
	// before optional chaining

	// const img =
	//   (images && images[0] && images[0].small && images[0].small.url) || avatar;
	// Combining with the nullish coalescing operator ??
	// const img = images?.[0]?.small?.url ?? avatar;
	// ?? vs || - please utilize the search engine

	const img = images?.[0]?.small?.url || avatar;

	return (
		<div>
			<img
				src={img}
				alt={name}
				style={{ width: '50px' }}
			/>
			<h4>{name} </h4>
			<p>Nickname : {nickName}</p>
		</div>
	);
}
