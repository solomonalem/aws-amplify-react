import React from 'react';
import { NavLink, Routes, Route, BrowserRouter } from 'react-router-dom';

const Card = () => {
	return (
		<div id='card' className='card'>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/main'>Main</NavLink>
			<NavLink to='/movie'>Movies</NavLink>
		</div>
	);
};
export default Card;
