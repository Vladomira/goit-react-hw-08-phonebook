// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import * as contactsActions from "./contacts-actions";
import {
  fetchContactsApi,
  addContactFetch,
  deleteContactFetch,
} from "../servises/contacts-api";

export const fetchForContacts = createAsyncThunk(
  // "contacts/fetchContacts", //condition
  contactsActions.fetchContacts,
  //payload-creator:
  async () => {
    const contacts = await fetchContactsApi();
    // console.log(contacts, "contacts");
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContacts", //condition
  // contactsActions.addContact,
  //payload-creator:
  async (data) => {
    console.log9(data);
    const { name, number } = data;
    const contact = await addContactFetch(name, number);
    console.log9(data, "after");
    return contact;
  }
);

export const deleteContact = createAsyncThunk(
  contactsActions.deleteContact,
  //payload-creator:
  async (contactId) => {
    const contact = await deleteContactFetch(contactId);
    console.log(contact, "contact deleted");
    return contact;
  }
);

// without createAsyncThunk
// export const fetchForContacts = () => async (dispatch) => {
//   dispatch(contactsActions.fetchContactsRequest());

//   try {
//     const contacts = await fetchContactsApi();
//     dispatch(fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }
// };
// ====
// export const addContact = (name, number) => (dispatch) => {
//   const contact = { name, number, completed: false };

//   dispatch(addContactsRequest());
//   axios
//     .post("/contacts", contact)
//     .then(({ data }) => {
//       //   console.log(data, "response");
//       dispatch(addContactsSuccess(data));
//     })
//     .catch((error) => dispatch(addContactsError(error)));
// };
// ===
// export const deleteContact = (contactId) => (dispatch) => {
//   dispatch(deleteContactsRequest());

//   axios
//     .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(deleteContactsSuccess(contactId)))
//     .catch((error) => dispatch(deleteContactsError(error)));
// };

// export default { addContact, deleteContact };
