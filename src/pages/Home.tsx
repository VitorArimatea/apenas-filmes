import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import styles from "../styles";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className={`${styles.paddingY} ${styles.paddingX} bg-neutral-100`}>
      <h2 className="text-primary font-poppins text-center pb-12 text-3xl font-medium">Os Melhores Filmes</h2>
      <div className="flex flex-wrap justify-around">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0  && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;