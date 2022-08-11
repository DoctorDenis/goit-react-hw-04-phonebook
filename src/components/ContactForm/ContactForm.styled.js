import styled from 'styled-components';

export const StyledForm = styled.form`
  /* border: 1px solid black; */
  border-radius: 10px;
  box-shadow: 0px 1px 8px 1px black;
  background-image: linear-gradient(#ffffff42, #ffffff26);
  padding: 2rem;
  display: flex;
  max-width: 450px;
  box-sizing: border-box;
  flex-direction: column;
  text-align: left;
  margin: 0 auto;
  &:focus-within {
    box-shadow: 0px 0px 1px 1px black;
  }
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  width: fit-content;
  margin: 1rem auto 0;
  font-size: 1rem;
  border: none;
  background-color: #759091;
  color: white;
`;
