import { useEffect, useState } from "react";
import Header from "./Header";

export default function Movie({query}) {
    const [movies, setMovies] = useState([])
    const API_KEY = import.meta.env.VITE_API_KEY;
    


    useEffect(() => {
         if (!query) {
            setMovies([]);
            return;
        }
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
            .then(res => res.json())
            .then(movies => setMovies(movies.results || []))
    }, [query, API_KEY])

    return (
        <ul>
            {movies.map((movie, index) => (
                <li key={index}>{movie.title}, {movie.original_title}, {movie.original_language}
                </li>
            ))}
        </ul >

    )




}