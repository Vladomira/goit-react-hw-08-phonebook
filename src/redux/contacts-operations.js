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
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  contactsActions.addContact,

  async (data) => {
    const { name, number } = data;
    const contact = await addContactFetch(name, number);

    return contact;
  }
);

export const deleteContact = createAsyncThunk(
  contactsActions.deleteContact,
  async (contactId) => {
    if (!contactId) {
      return;
    }
    const contact = await deleteContactFetch(contactId);

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
