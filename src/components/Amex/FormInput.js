import React, { useState } from 'react';

const FormInput = () => {
	const stateObj = {
		CA: ['Oakland', 'San Francisco'],
		AZ: ['Phineox', 'Tuson'],
	};

	const [stateName, setStateName] = useState('CA');
	const [cities, setCities] = useState([]);

	const handleSubmit = () => {};
	const handleSelection = e => {
		setStateName(e.target.value);
		const cityOption = stateObj[e.target.value];
		setCities(cityOption);
	};

	console.log(stateObj[stateName]);
	return (
		<>
			<h2>Fill the form below</h2>
			<form onSubmit={handleSubmit}>
				<input type='text' placeholder='name' />
				<input type='text' placeholder='email' />
				<select onChange={handleSelection}>
					{Object.keys(stateObj).map(el => (
						<option key={el} value={el}>
							{el}
						</option>
					))}
				</select>
				<select>
					{cities.map(el => (
						<option>{el}</option>
					))}
				</select>

				<button>Submit</button>
				<pre>{JSON.stringify(stateName)}</pre>
			</form>
		</>
	);
};
export default FormInput;
