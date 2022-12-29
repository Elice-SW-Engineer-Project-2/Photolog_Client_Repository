import styled from 'styled-components';

export const ScrollContainer = styled.div`
  position: fixed;
  right: 7%;
  bottom: 5%;
  z-index: 1;
`;

export const Button = styled.button`
  font-weight: bold;
  font-size: 15px;
  padding: 15px 10px;
  background-color: #000;
  color: #fff;
  border: 1px solid rgb(210, 204, 193);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  &:hover {
    color: rgb(142, 26, 26);
  }
`;
