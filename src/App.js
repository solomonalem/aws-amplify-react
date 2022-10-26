import './App.css';
import React, { useEffect } from 'react';
import ComponentContainer from './components/ComponentContainer';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Main from './components/Amex/Main';
import Movie from './components/Movie/Movie';
import Card from './components/Card';
import Home from './components/Home';

// const ComponentContainer = React.lazy(() =>
// 	import('./components/ComponentContainer'),
// );

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='apps' element={<ComponentContainer />}>
						<Route path='main' element={<Main />} />
						<Route path='movie' element={<Movie />} />
					</Route>
				</Routes>
				<div className='back-to-home'>
					<NavLink className='btn-home' to='/'></NavLink>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
