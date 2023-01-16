import "./cars.scss";
import { useDispatch, useSelector } from "react-redux";
import { carsFormName, carsFormPrice, carsAdd } from "../../store/carsStore";

const CarsForm = () => {
  const dispatch = useDispatch();
  const { name, price } = useSelector((carsStore) => carsStore.form);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(carsAdd({ name, price }));
  };

  const nameChangeHandle = (e) => {
    const value = e.target.value;
    dispatch(carsFormName(value));
  };

  const priceChangeHandle = (e) => {
    const value = +e.target.value;
    dispatch(carsFormPrice(value));
  };

  return (
    <form className="cars-form" onSubmit={handleSubmit}>
      <input
        placeholder="Please enter car name"
        className="cars-form__input"
        type="text"
        value={name}
        onChange={nameChangeHandle}
      />
      <input
        placeholder="Please enter car price"
        className="cars-form__input"
        type="number"
        value={price || ""}
        onChange={priceChangeHandle}
      />
      <button className="cars-form__button">Submit</button>
    </form>
  );
};

export default CarsForm;
