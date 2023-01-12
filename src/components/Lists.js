import Panel from "./Panel";
import Button from "./Button";
import SongsList from "./SongsList/SongsList";
import MoviesList from "./MoviesList/MoviesList";
import { useDispatch } from "react-redux";
import { clearAll } from "../store/slices/listsSlice";

const Lists = () => {
  const dispatch = useDispatch();

  return (
    <Panel>
      <Button danger onClick={() => dispatch(clearAll())}>
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
