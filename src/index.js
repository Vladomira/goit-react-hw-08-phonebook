import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
// import { myAction } from "./redux/action";
import "modern-normalize/modern-normalize.css";
// import store from "./redux/store";
import App from "./components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// ReactDOM.render(
//    <React.StrictMode>
//       <Provider store={store}>
//          <PersistGate loading={null} persistor={persistor}>
//             <BrowserRouter>
//                <App />
//             </BrowserRouter>
//          </PersistGate>
//       </Provider>
//    </React.StrictMode>,
//    document.getElementById("root")
// );
