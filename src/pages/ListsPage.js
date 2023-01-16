import Lists from "../components/Lists";
import store from "../store/store";
import { Provider } from "react-redux";

const ListsPage = () => {
  return (
    <Provider store={store}>
      <Lists />
    </Provider>
  );
};

export default ListsPage;
