import { Link } from "react-router-dom";;

import {FaStar, FaCalendarAlt} from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div className="movie-card">
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
                <p>
                    <FaStar /> {movie.vote_average.toFixed(1)}
                </p>
                <p>
                    <FaCalendarAlt /> {movie.release_date}
                </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
        </div>
    );
};

export default MovieCard;