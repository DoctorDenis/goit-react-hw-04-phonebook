// import React from 'react';
import { ContactForm, ContactList, Filter } from './exportMap';
import { useState, useEffect, useMemo, useCallback } from 'react';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts'))
      ? [...JSON.parse(localStorage.getItem('contacts'))]
      : []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const submitHandler = contact => {
    if (contacts.find(el => el.name === contact.name)) {
      alert(`Sorry! ${contact.name} is already in contacts`);
      return;
    }
    setContacts([...contacts, contact]);
  };

  const filterInputChangeHandler = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );

  const deleteBtnClickHandler = useCallback(
    id => {
      setContacts([...contacts.filter(contact => contact.id !== Number(id))]);
    },

    [contacts]
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={submitHandler} contactsRef={contacts} />

      <h2>Contacts</h2>
      <Filter onChange={filterInputChangeHandler} value={filter} />

      <ContactList
        contacts={filteredContacts}
        onClick={deleteBtnClickHandler}
      />
    </div>
  );
}
