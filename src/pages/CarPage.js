import "bulma/css/bulma.css";
import "../components/Car/car.scss";
import CarForm from "../components/Car/CarForm";
import CarList from "../components/Car/CarList";
import CarSearch from "../components/Car/CarSearch";
import CarValue from "../components/Car/CarValue";
import { Provider } from "react-redux";
import { store } from "../store/carsStore";

const CarPage = () => {
  return (
    <Provider store={store}>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </Provider>
  );
};

export default CarPage;
