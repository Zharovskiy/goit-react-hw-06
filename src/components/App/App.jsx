import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import { useEffect, useState } from "react";
import css from "./App.module.css";
import { nanoid } from "nanoid";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (valuesFilds, actions) => {
    const addIdContact = { id: nanoid(), ...valuesFilds };
    setContacts((contacts) => [...contacts, addIdContact]);
    actions.resetForm();
  };

  const onDeleteContact = (contactId) => {
    setContacts((contacts) =>
      contacts.filter((contact) => contact.id !== contactId)
    );
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox searchValue={search} handleChange={handleChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export default App;
