import { createReducer, combineReducers } from "@reduxjs/toolkit";

import * as contactsActions from "./contacts-actions";
import {
  fetchForContacts,
  addContact,
  deleteContact,
} from "./contacts-operations";

const items = createReducer([], {
  [fetchForContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    // state.filter(({ id }) => id !== payload),
    forDeleteContact(state, payload),
});

const forDeleteContact = (state, payload) =>
  state.filter(({ id }) => id !== payload);

const isDeleting = createReducer(false, {
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});
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
  isDeleting,
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
