import { useSelector } from "react-redux";

const CarsTotal = () => {
  const { search, carsList } = useSelector((store) => store.cars);

  const filteredCarsList = carsList.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  const total = filteredCarsList.reduce((prev, car) => {
    return prev + car.price;
  }, 0);

  return <div>Total: {total}</div>;
};

export default CarsTotal;
