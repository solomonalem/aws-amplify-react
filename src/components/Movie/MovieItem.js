import React from 'react';

const MovieItem = props => {
	const { Title, Year, Poster, imdbID } = props.movie;
	return (
		<div className='movie-item '>
			<div className='image'>
				<img src={Poster} alt='' />
			</div>
			<div className='movie-name'>
				<span className='movie-title'>{Title}</span>
				<span>{Year}</span>
			</div>
		</div>
	);
};
export default MovieItem;
