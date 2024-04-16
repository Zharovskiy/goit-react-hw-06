import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";

import Contact from "../Contact/Contact.jsx";

import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const search = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={css.contactCard} key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
