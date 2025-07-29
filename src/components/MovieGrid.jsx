import { useEffect, useState } from "react";

export default function Movie() {
    const [movies, setMovies] = useState([])
    const API_KEY = import.meta.env.VITE_API_KEY;
    


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(movies => setMovies(movies.results || []))
    }, [])

    return (
        <ul>
            {movies.map((movie, index) => (
                <li key={index}>{movie.title}</li>
            ))}
        </ul >

    )




}