import './App.css';
import React, { useEffect } from 'react';
import ComponentContainer from './components/ComponentContainer';
import { BrowserRouter } from 'react-router-dom';
import Card from './components/Card';
import Home from './components/Home';

// const ComponentContainer = React.lazy(() =>
// 	import('./components/ComponentContainer'),
// );

function App() {
	return (
		<>
			<BrowserRouter>
				<ComponentContainer />
			</BrowserRouter>
		</>
	);
}

export default App;
