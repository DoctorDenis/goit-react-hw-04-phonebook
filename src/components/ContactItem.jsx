import PropTypes from 'prop-types';
import { memo } from 'react';

function ContactItem({ contact: { id, name, number }, delMethod }) {
  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button id={id} type="button" onClick={() => delMethod(id)}>
        Delete
      </button>
    </li>
  );
}

export default memo(ContactItem);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  delMethod: PropTypes.func.isRequired,
};
