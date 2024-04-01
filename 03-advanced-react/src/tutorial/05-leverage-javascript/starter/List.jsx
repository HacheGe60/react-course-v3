import { Person } from './Person';
import { people } from '../../../data.js';

const List = () => {
	return (
		<>
			{people.map((person) => {
				return (
					<Person
						key={person.name}
						{...person}
					/>
				);
			})}
		</>
	);
};

export default List;
