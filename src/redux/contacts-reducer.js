// import { combineReducers } from "redux";
import { createReducer, combineReducers } from "@reduxjs/toolkit";

import * as contactsActions from "./contacts-actions";
import {
  fetchForContacts,
  addContact,
  deleteContact,
} from "./contacts-operations";

// const contactsState = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

// const items = createReducer([], {
//   [fetchContactsSuccess]: (_, action) => action.payload,
// });
const items = createReducer([], {
  [fetchForContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  // forDeleteContact(state, payload),
});

const forDeleteContact = (state, payload) =>
  state.filter(({ id }) => id !== payload);

const filter = createReducer("", {
  [contactsActions.filtredContacts]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchForContacts.pending]: () => true,
  [fetchForContacts.fulfilled]: () => false,
  [fetchForContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  // [addContactsRequest]: () => true,
  // [addContactsSuccess]: () => false,
  // [addContactsError]: () => false,

  // [deleteContactsRequest]: () => true,
  // [deleteContactsSuccess]: () => false,
  // [deleteContactsError]: () => false,
});

const error = createReducer(null, {
  [fetchForContacts.rejected]: (_, action) => action.payload,
  [fetchForContacts.pending]: () => null,

  [addContact.rejected]: (_, action) => action.payload,
  [addContact.pending]: () => null,

  [deleteContact.rejected]: (_, action) => action.payload,
  [deleteContact.pending]: () => null,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
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
/// import {
//   // addContactsRequest,
//   // addContactsSuccess,
//   // addContactsError,
//   fetchContact,
//   addContact,
//   deleteContact,
//   filtredContacts,
//   // deleteContactsRequest,
//   // deleteContactsSuccess,
//   // deleteContactsError,
//   // fetchContactsRequest,
//   // fetchContactsSuccess,
//   // fetchContactsError,
// } from "./contacts-actions";
