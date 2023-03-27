import { useState, useEffect } from "react";
import styles from "../styles";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url:any) => {
    const res = await fetch(url);
    const data = await res.json()

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated${apiKey}`

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className={`${styles.paddingY} ${styles.paddingX}`}>
      {topMovies && topMovies.map((movie) => <p>{movie.title}</p>)}
    </div>
  );
};

export default Home;