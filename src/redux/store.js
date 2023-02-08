import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import middleware from "./contacts/contacts-middleware";
import contactsReducer from "./contacts/contacts-reducer";
import { authReducer } from "./auth";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },

  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
