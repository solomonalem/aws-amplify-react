import React from 'react';
// import Movie from './Movie/Movie';
// import Card from './Card.js';
// import Main from './Amex/Main';
// import Home from './Home.js';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const Main = React.lazy(() => import('./Amex/Main'));
const Movie = React.lazy(() => import('./Movie/Movie'));

const ComponentContainer = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/main' element={<Main />} />
				<Route path='/movie' element={<Movie />} />
			</Routes>
		</div>
	);
};
export default ComponentContainer;
