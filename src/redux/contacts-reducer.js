import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";

const contactsState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const forDeleteContact = (state, payload) =>
  state.filter(({ id }) => id !== payload);

const items = createReducer(contactsState, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    forDeleteContact(state, payload),
});

const filter = createReducer("", {
  [actions.filtredContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// const items = (state = contactsState, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case "contact/changeFilter":
//       return payload;

//     default:
//       return state;
//   }
// };
