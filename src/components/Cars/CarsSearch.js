import { useDispatch, useSelector } from "react-redux";
import { carsSearch } from "../../store/carsStore";

const CarsSearch = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((store) => store.cars);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const value = e.target.value;

    dispatch(carsSearch(value));
  };

  return (
    <form className="cars-search" onSubmit={handleSubmit}>
      <label className="cars-search__label">Search: </label>
      <input
        value={search}
        className="cars-search__input"
        type="text"
        onChange={handleChange}
      />
    </form>
  );
};

export default CarsSearch;
