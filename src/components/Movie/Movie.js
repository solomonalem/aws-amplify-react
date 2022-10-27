import React, { useEffect, useState } from 'react';
import MovieItem from './MovieItem';

const Movie = () => {
	const [movies, setMovies] = useState([]);
	const [search, setSearch] = useState('bridge');
	const [input, setInPut] = useState();

	const handleSubmit = e => {
		e.preventDefault();
		setSearch(input);
	};

	useEffect(() => {
		const API = `https://www.omdbapi.com/?s=$${search}&apikey=c296f12b`;
		console.log('effect-runn- ');
		const getMovies = async () => {
			try {
				const response = await fetch(API);
				const res = await response.json();
				await setMovies(res.Search);
			} catch (error) {
				console.log(error.message);
			}
		};
		getMovies();
	}, [search]);
	return (
		<div>
			<h1 className='movies-header'>Movies</h1>
			<form onSubmit={handleSubmit}>
				<>
					<input
						className='m-search'
						name='movie'
						placeholder='movies'
						id='m-search'
						onChange={e => setInPut(e.target.value)}
					/>
				</>

				<button  value='submit'>search</button>
			</form>

			<div className='movies'>
				{movies ? (
					movies.map(movie => <MovieItem movie={movie} key={movie.imdbID} />)
				) : (
					<h1>No Movies with {search} Input </h1>
				)}
			</div>
		</div>
	);
};
export default Movie;
