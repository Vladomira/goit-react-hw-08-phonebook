import React from "react";
import ReactDOM from "react-dom";
import bigStore from "./redux/store";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import { myAction } from "./redux/action";
import "modern-normalize/modern-normalize.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={bigStore.store}>
      <PersistGate loading={null} persistor={bigStore.persistor}>
        <BrowserRouter>{<App />}</BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
