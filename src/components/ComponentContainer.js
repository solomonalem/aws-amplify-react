import React from 'react';
import Movie from './Movie/Movie';
import Main from './Amex/Main';
import Home from './Home.js';
import { Routes, Route, NavLink } from 'react-router-dom';

const ComponentContainer = () => {
	return (
		<div>
			<Routes>
				<Route path='/main' element={<Main />} />
				<Route path='/movie' element={<Movie />} />
			</Routes>
		</div>
	);
};
export default ComponentContainer;
