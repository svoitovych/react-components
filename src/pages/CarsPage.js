import CarsForm from "../components/Cars/CarsForm";
import CarsSearch from "../components/Cars/CarsSearch";
import CarsList from "../components/Cars/CarsList";
import CarsTotal from "../components/Cars/CarsTotal";
import { carsStore } from "../store/carsStore";
import { Provider } from "react-redux";

const CarsPage = () => {
  return (
    <Provider store={carsStore}>
      <CarsForm />
      <CarsSearch />
      <CarsList />
      <CarsTotal />
    </Provider>
  );
};

export default CarsPage;
