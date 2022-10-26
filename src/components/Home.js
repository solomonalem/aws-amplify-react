import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from './Card';

const Home = () => {
	return (
		<>
			{' '}
			<Routes>
				<Route path='/' element={<Card />} />
			</Routes>
		</>
	);
};
export default Home;
