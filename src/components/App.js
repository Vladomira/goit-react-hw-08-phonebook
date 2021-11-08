import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import "../styles/index.scss";

//
function App() {
  return (
    <div className="myCursor">
      <div className="container">
        <h1 className="header">Phonebook</h1>
        <ContactForm />

        <h2 className="contacts__title">Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
export default App;
