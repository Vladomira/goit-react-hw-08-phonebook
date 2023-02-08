import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsActions from "./contacts-actions";
import {
  fetchContactsApi,
  addContactFetch,
  deleteContactFetch,
} from "./servises/contacts-api";

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
