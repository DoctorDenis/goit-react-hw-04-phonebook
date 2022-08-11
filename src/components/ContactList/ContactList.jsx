import React from 'react';
import { StyledUl } from './ContactList.styled';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';

export function ContactList({ contacts, onClick }) {
  return (
    <StyledUl>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} delMethod={onClick} />
      ))}
    </StyledUl>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
