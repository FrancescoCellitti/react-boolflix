
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
       <div className="col col-md-3 ">
            <div className="card p-1 my-2 border-0">
                <img
                    src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`}
                    className="netflix-card-img"
                    alt={movies.title}
                    style={{
                        height: "400px",                      
                    }}
                />
        
            </div>
        </div>
    )
}




/*
                                    <li key={index}>{movie.title}, {movie.original_title}, <CountryFlag countryCode={Language[movie.original_language]} svg
                                        style={{ width: '1.5em', height: '1.5em' }} />{movie.original_language}
                                        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
                                        vote: {Math.ceil((movie.vote_average) / 2)} /5
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className={`fa-star ${i < Math.ceil((movie.vote_average) / 2) ? "fa-solid text-warning" : "fa-regular text-warning"}`}></i>
                                        ))}
                                    </li>*/