import { useState } from "react";
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

export default function CardMovies({ movies }) {


    return (

        <div className="col col-md-3">
            <div className="card card-img p-1 my-2 border-0 bg-dark text-white" style={{ minHeight: "400px", height: "400px", position: "relative", overflow: "hidden" }}>
                <img
                    src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`}
                    alt={movies.title}
                    style={{
                        height: "400px",
                    }} />

                <div className="card-info card-img p-1 my-2 border-0 text-white">
                    <ul className="list-unstyled">
                        <li>{movies.title}</li>
                        <li>{movies.original_title}</li>
                        <li><CountryFlag countryCode={Language[movies.original_language]} svg
                            style={{ width: '1.5em', height: '1.5em' }} /></li>
                        <li>{[...Array(5)].map((_, i) => (
                            <i key={i} className={`fa-star ${i < Math.ceil((movies.vote_average) / 2) ? "fa-solid text-warning" : "fa-regular text-warning"}`}></i>
                        ))}</li>
                    </ul>
                </div>

            </div>


        </div>

    )
}