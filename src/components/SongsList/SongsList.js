import { Fragment } from "react";
import Button from "../Button";
import "./songs-list.scss";
import { useSelector, useDispatch } from "react-redux";
import { addSong, removeSong } from "../../store/slices/songsListSlice";

const SongsList = () => {
  const songs = useSelector((state) => state.songs.value);
  const dispatch = useDispatch();

  const renderSongsList = () => {
    return (
      <ul className="songs-list__list">
        {songs.map((song, index) => {
          return (
            <li key={index} className="songs-list__song-item">
              {song}{" "}
              <Button onClick={() => dispatch(removeSong({ payload: song }))}>
                X
              </Button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <Fragment>
      <div className="songs-list__header">
        <h1 className="songs-list__title">Songs List</h1>
        <Button success onClick={() => dispatch(addSong())}>
          Add Song
        </Button>
      </div>
      {renderSongsList()}
    </Fragment>
  );
};

export default SongsList;
