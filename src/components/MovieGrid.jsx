import { useEffect, useState } from "react";
import Header from "./Header";
import CountryFlag from "react-country-flag";
import CardMovies from "./card";
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

                    {movies.length === 0 ? (<h1 className="text-secondary px-4">Film non trovato</h1>) : (
                        <>
                            <h1 className="text-danger px-4">Films</h1>
                            <div className="container">
                                <div className="row">

                                    {movies.map((movie, index) => (
                                        <CardMovies movies={movie} key={movie.id}></CardMovies>


                                    ))}
                                </div>
                            </div>



                        </>
                    )}








                    {series.length > 0 && (
                        <>
                            <h1 className="text-danger px-4">Serie Tv</h1>
                            <div className="container">
                                <div className="row">
                                    {series.map((serie, index) => (
                                        <CardMovies movies={serie} key={serie.id}></CardMovies>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                </>
            )}

        </>
    )
}
     
