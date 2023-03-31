import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchURL: string = import.meta.env.VITE_SEARCH;  
const apiKey: string = import.meta.env.VITE_API_KEY;

import styles from "../styles";

  const Search = () => { 
    const [searchParams] = useSearchParams();
      
    interface SearchResponse {
        results: Array <{
            id: number
            title: string
            overview: string
            poster_path: string | null
            vote_average: number
        }>
    }

    const [movies, setMovies] = useState<SearchResponse["results"]>([]);
    const query = searchParams.get("q");

    const getSearchedMovies = async (url:string) => {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
  };

  useEffect (() => {
      const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
      console.log(searchWithQueryURL);
      getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className={`${styles.paddingY} ${styles.paddingX}`}>
      <h2 className="text-stone-900 font-poppins text-center pb-12 text-3xl">Resultados para: <span className="text-emerald-500">{query}</span></h2>
      <div className="flex flex-wrap justify-around">
        {movies.length > 0 && 
          movies.map((movie: any) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;