// import React, { Component } from "react";
import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import useLocalStorage from "./hooks/hooks";
import "../styles/Container.scss";
import "../styles/Form.scss";
import "../styles/ContactsList.scss";

const { v4: uuidv4 } = require("uuid");
//
function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [contactsFilter, setContactsFilter] = useState("");

  //пpинимает данные из формы
  const formSubmit = (name, number) => {
    if (contacts.find((el) => name === el.name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newData = [{ id: uuidv4(), name: name, number: number }];
    setContacts((prevState) => [...prevState, ...newData]);
  };

  const filterContacts = () => {
    const normalizeFilter = contactsFilter.toLowerCase();
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const onFilterChange = (e) => {
    setContactsFilter(e.currentTarget.value);
  };
  const onDeleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const contactsData = filterContacts();
  return (
    <div className="container">
      <h1 className="header">Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />

      <h2 className="contacts__title">Contacts</h2>
      <Filter value={onFilterChange} filter={contactsFilter} />
      <ContactList contacts={contactsData} onBtnDelete={onDeleteContact} />
    </div>
  );
}
export default App;
