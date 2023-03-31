import { Link } from "react-router-dom";

import { FaStar } from 'react-icons/fa';

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true }) => {
  return (
    <div className="flex flex-col justify-between w-[20%] mr-1 mb-10 bg-stone-800 rounded-md p-2 text-secondary">
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h2 className="text-2xl">{movie.title}</h2>
        <p className="text-xl text-yellow-300"> 
            <FaStar /> <span className="text-secondary">{movie.vote_average}</span>
        </p>
        <div className="flex items-end">
          <div className="w-full mt-2 p-2 bg-green-400 text-primary text-center font-poppins cursor-pointer border-[3px] border-green-400 hover:bg-transparent hover:text-secondary duration-200">
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
          </div>
        </div>
    </div>
  );
};

export default MovieCard;