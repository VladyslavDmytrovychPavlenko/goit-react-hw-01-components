import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  background: white;
  border-radius: 6px;
  box-shadow: 6px -2px 26px 2px rgba(166, 156, 48, 0.55);
`;
export const Thead = styled.thead`
  height: 60px;
  color: white;
  text-transform: uppercase;
  font-size: 15px;
`;
export const Th = styled.th`
  background-color: blue;
  box-shadow: inset 0px 0px 0px 2px rgba(33, 32, 22, 0.99);
`;

export const Tr = styled.tr`
  height: 50px;
  text-align: center;
  :nth-child(2n) {
    background-color: orange;
  }
`;

export const Td = styled.td`
  box-shadow: inset 0px 0px 0px 2px rgba(33, 32, 22, 0.99);
`;
