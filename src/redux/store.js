import { configureStore } from "@reduxjs/toolkit";
import middleware from "./contacts-middleware";
import contactsReducer from "./contacts-reducer";
// import { contactsApi } from "../components/FetchApi/contactsFetch";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  // devTools: process.env.NODE_ENV === "development",

  middleware,
});
export default store;

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

// const persistor = persistStore(store);

// const bigStore = {
//   store,
//   // persistor,
// };
