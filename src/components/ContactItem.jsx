import React from 'react';
import PropTypes from 'prop-types';

export default function ContactItem({
  contact: { id, name, number },
  delMethod,
}) {
  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button id={id} type="button" onClick={delMethod}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  delMethod: PropTypes.func.isRequired,
};
