import React from 'react';
import { NavLink, Routes, Route, BrowserRouter } from 'react-router-dom';

const Card = () => {
	return (
		<div id='card' className='card'>
			<NavLink to='/apps/main'>Main</NavLink>
			<NavLink to='/apps/movie'>Movies</NavLink>
		</div>
	);
};
export default Card;
