import { createAction } from "@reduxjs/toolkit";

const { v4: uuidv4 } = require("uuid");

const addContact = createAction("contact/add", (name, number) => ({
  payload: { id: uuidv4(), name, number },
}));

const deleteContact = createAction("contact/delete");

const filtredContacts = createAction("contact/changeFilter");

const actions = { addContact, deleteContact, filtredContacts };

export default actions;

//
// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: { id: uuidv4(), name, number },
// });

// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const filtredContacts = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
