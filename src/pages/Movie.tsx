import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs';

import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    
    const getMovie = async(url: string) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data);
    };

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`;
        getMovie(movieUrl);
        console.log(movieUrl);
    }, [])

    return (
        <div className="flex flex-col items-center p-10">
            {movie && (
                <>
                    <MovieCard movie={movie} showLink={false} />
                    <p className="tagline">{movie.tagline}</p>
                    <div>
                        <h3 className="flex justify-between items-center">
                            <BsWallet2 /> Orçamento:{" "}
                        </h3>
                        <p>{formatCurrency(movie.budget)}</p>
                    </div>
                    <div>
                        <h3 className="flex justify-evenly items-center">
                            <BsGraphUp /> Receita:{" "}
                        </h3>
                        <p>{formatCurrency(movie.revenue)}</p>
                    </div>
                    <div>
                        <h3 className="flex justify-between items-center">
                            <BsHourglassSplit /> Duração:{" "}
                        </h3>
                        <p>{movie.runtime} minutos</p>
                    </div>
                    <div>
                        <h3 className="flex justify-between items-center">
                            <BsFillFileEarmarkTextFill /> Descrição:{" "}
                        </h3>
                        <p>{movie.overview}</p>
                    </div>
                </>
            )}
        </div>
    )
};

export default Movie;