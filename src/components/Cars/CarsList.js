import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";

const CarsList = () => {
  const dispatch = useDispatch();

  const { search, carsList } = useSelector((store) => store.cars);

  const includes = (a, b) => {
    return a.toLowerCase().includes(b.toLowerCase());
  };

  const filteredCarsList = carsList.filter((car) => includes(car.name, search));

  const carsListRender = () => {
    return (
      <ul>
        {filteredCarsList.map((car) => {
          return (
            <li key={car.id}>
              {car.name} - ${car.price}
            </li>
          );
        })}
      </ul>
    );
  };

  return <Fragment>{carsListRender()}</Fragment>;
};

export default CarsList;
