import React from 'react';
import { StyledInput } from './Filter.styled';
import PropTypes from 'prop-types';

export function Filter({ onChange, value }) {
  return (
    <>
      <p>Find contacts by name</p>
      <StyledInput
        type="text"
        name="query"
        value={value}
        onChange={onChange}
        id="query"
      />
    </>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
