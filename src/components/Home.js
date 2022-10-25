import React from 'react';

const Card = React.lazy(() => import('./Card'));

const Home = () => {
	return (
		<>
			<Card />
		</>
	);
};
export default Home;
