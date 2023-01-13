import Panel from "./Panel";
import Button from "./Button";
import SongsList from "./SongsList/SongsList";
import MoviesList from "./MoviesList/MoviesList";
import { useDispatch } from "react-redux";
import { clearSongsList } from "../store/slices/songsListSlice";
import { clearMoviesList } from "../store/slices/moviesListSlice";

const Lists = () => {
  const dispatch = useDispatch();

  const clearButtonClickHandler = () => {
    dispatch(clearSongsList());
    dispatch(clearMoviesList());
  };

  return (
    <Panel>
      <Button danger onClick={clearButtonClickHandler}>
        Clear all list
      </Button>
      <br />
      <hr />
      <br />
      <SongsList />
      <br />
      <hr />
      <br />
      <MoviesList />
    </Panel>
  );
};

export default Lists;
