import { createAction } from "@reduxjs/toolkit";

export const fetchContacts = createAction("contact/fetchContact");
export const addContact = createAction("contact/addContact");
export const deleteContact = createAction("contact/deleteContact");

export const filtredContacts = createAction("contact/changeFilter");
