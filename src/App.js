import "./App.css";
import MainLayout from "./components/MainLayout";
import { Provider } from "react-redux";
import store from "./redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}

export default App;
