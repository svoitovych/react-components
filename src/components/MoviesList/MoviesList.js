import { Fragment } from "react";
import Button from "../Button";
import "./movies-list.scss";
import { useSelector, useDispatch } from "react-redux";
import { addMovie, removeMovie } from "../../store/slices/moviesListSlice";

const MoviesList = () => {
  const movies = useSelector((state) => state.movies.value);
  const dispatch = useDispatch();

  const renderMoviesList = () => {
    return (
      <ul className="movies-list__list">
        {movies.map((movie, index) => {
          return (
            <li key={index} className="movies-list__movie-item">
              {movie}
              <Button onClick={() => dispatch(removeMovie(movie))}>X</Button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <Fragment>
      <div className="movies-list__header">
        <h1 className="movies-list__title">Movies List</h1>
        <Button success onClick={() => dispatch(addMovie())}>
          Add Movie
        </Button>
      </div>
      {renderMoviesList()}
    </Fragment>
  );
};

export default MoviesList;
