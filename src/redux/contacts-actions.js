import types from "./contacts-types";

const { v4: uuidv4 } = require("uuid");

const addContact = (name, number) => ({
  type: types.ADD,
  payload: { id: uuidv4(), name, number },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const filtredContacts = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});
export default { addContact, deleteContact, filtredContacts };
