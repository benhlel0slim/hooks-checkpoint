import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies}) {
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent: 'space-around'}}>
            {movies.map((el,i)=> <MovieCard key={i} title={el.title} rate={el.rate} description={el.description} posterUrl={el.posterUrl} />)}
        </div>
    )
}

export default MovieList
