import React from 'react';
import { ContactForm, ContactList, Filter } from './exportMap';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (JSON.parse(localStorage.getItem('contacts'))) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onSubmitHandler = contact => {
    if (this.state.contacts.find(el => el.name === contact.name)) {
      alert(`Sorry! ${contact.name} is already in contacts`);
      return;
    }
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  onFilterInputChangeHandler = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  filteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  onDeleteBtnClickHandler = event => {
    this.setState({
      contacts: [
        ...this.state.contacts.filter(
          contact => contact.id !== Number(event.target.id)
        ),
      ],
    });
  };

  render() {
    const filteredContacts = this.filteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.onSubmitHandler}
          contactsRef={this.state.contacts}
        />

        <h2>Contacts</h2>
        <Filter
          onChange={this.onFilterInputChangeHandler}
          value={this.state.filter}
        />

        <ContactList
          contacts={filteredContacts}
          onClick={this.onDeleteBtnClickHandler}
        />
      </div>
    );
  }
}

export default App;
