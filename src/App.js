import ChildComponent from "./component/Child";
import configureStore from "./store";
import { Provider } from "react-redux";

const store = configureStore();
console.log("The store", store);

export default function App() {
  return (
    <Provider store={store}>
      <ChildComponent />
    </Provider>
  );
}
