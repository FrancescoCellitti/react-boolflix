import { useEffect, useState } from "react";
import Header from "./Header";
import CountryFlag from "react-country-flag";
const Language = {
    en: "US",
    it: "IT",
    fr: "FR",
    es: "ES",
    de: "DE",
    ja: "JP",
    zh: "CN",
    hi: "IN",
}
export default function Movie({ query }) {
    const [movies, setMovies] = useState([])
    const API_KEY = import.meta.env.VITE_API_KEY;
    const [series, setSeries] = useState([])



    useEffect(() => {
        if (!query) {
            setMovies([]);
            return;
        }
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
            .then(res => res.json())
            .then(movies => setMovies(movies.results || []))

        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}`)
            .then(result => result.json())
            .then(series => setSeries(series.results || []))
    }, [query, API_KEY])

    return (
        <>
            {query && (
                <>
                    <h1 className="text-danger px-4">Films</h1>
                    <ul>

                        {movies.map((movie, index) => (

                            <li key={index}>{movie.title}, {movie.original_title}, <CountryFlag countryCode={Language[movie.original_language]} svg
                                style={{ width: '1.5em', height: '1.5em' }} />{movie.original_language}
                                <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
                                vote: {Math.ceil((movie.vote_average) / 2)} /5
                                {[...Array(5)].map((_, i) => (
                                <i key={i} className={`fa-star ${i < Math.ceil((movie.vote_average) / 2) ? "fa-solid text-warning" : "fa-regular"}`}></i>
                                ))}
                            </li>
                        ))}
                    </ul >
                    <h1 className="text-danger px-4">Serie Tv</h1>
                    <ul>

                        {series.map((serie, index) => (
                            <li key={index}>{serie.name}, {serie.original_name}, <CountryFlag countryCode={serie.origin_country && serie.origin_country[0] ? serie.origin_country[0] : ""} svg
                                style={{ width: '1.5em', height: '1.5em' }} />{serie.original_language}
                                <img src={`https://image.tmdb.org/t/p/w342${serie.poster_path}`} alt="" />
                                vote: {Math.ceil((serie.vote_average) / 2)} /5
                                {[...Array(5)].map((_, i) => (
                                <i key={i} className={`fa-star ${i < Math.ceil((serie.vote_average) / 2) ? "fa-solid text-warning" : "fa-regular"}`}></i>
                                ))}
                            </li>
                        ))}
                    </ul >
                </>
            )}

        </>
    )

}