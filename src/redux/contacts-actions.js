import { createAction } from "@reduxjs/toolkit";

export const fetchContacts = createAction("contact/fetchContact");
export const addContact = createAction("contact/addContact");
export const deleteContact = createAction("contact/deleteContact");

export const filtredContacts = createAction("contact/changeFilter");
// export const fetchContactsRequest = createAction(
//   "contacts/fetchContactsRequest"
// );
//
// export const fetchContactsSuccess = createAction(
//   "contacts/fetchContactsSuccess"
// );
//
// export const fetchContactsError = createAction("contacts/fetchContactsError");

// export const addContactsRequest = createAction("contacts/addContactRequest");
// export const addContactsSuccess = createAction("contacts/addContactSuccess");
// export const addContactsError = createAction("contacts/addContactError");

// export const deleteContactsRequest = createAction(
//   "contacts/deleteContactRequest"
// );
// export const deleteContactsSuccess = createAction(
//   "contacts/deleteContactSuccess"
// );
// export const deleteContactsError = createAction("contacts/deleteContactError");

// const actions = {
//   addContactsRequest,
//   addContactsSuccess,
//   addContactsError,

//   deleteContactsRequest,
//   deleteContactsSuccess,
//   deleteContactsError,

//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,

//   deleteContact,
//   filtredContacts,
// };

// export default actions;

// const addContact = createAction("contact/add", (name, number) => ({
//   payload: { id: uuidv4(), name, number },
// }));

// axios.defaults.baseURL = "https://6192166f41928b00176902b2.mockapi.io/contacts";
// const addContact = (name, number) => (dispatch) => {
//   const contact = { name, number, completed: false };

//   dispatch({ type: "contacts/addContactRequest" });
//   axios
//     .post("/contacts", contact)
//     .then((response) => {
//       console.log(response, "response");
//       dispatch({ type: "contacts/addContactSuccess", payload: response.data });
//     })
//     .catch((error) => dispatch(error));
// };
