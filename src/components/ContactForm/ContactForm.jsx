import React from 'react';
import { StyledForm, StyledButton } from './ContactForm.styled';
import PropTypes from 'prop-types';
import styles from '../../index.module.css';

export class ContactForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contactsRef: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  onChangeEventHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    let { name, number } = event.target.elements;
    const contact = {
      id: new Date().getTime(),
      [name.name]: name.value,
      [number.name]: number.value,
    };
    this.props.onSubmit(contact);
    event.target.reset();
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <StyledForm onSubmit={this.onSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input
          className={styles.form_input}
          type="text"
          name="name"
          value={this.state.name}
          id="name"
          onChange={this.onChangeEventHandler}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <input
          className={styles.form_input}
          id="number"
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.onChangeEventHandler}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    );
  }
}
