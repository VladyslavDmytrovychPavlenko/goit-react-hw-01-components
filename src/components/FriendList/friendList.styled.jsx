import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const StatsEl = styled.li`
  background-color: white;
  border-radius: 6px;
  box-shadow: 6px -2px 26px 2px rgba(166, 156, 48, 0.55);
  align-items: center;
  width: 300px;
  padding: 5px;
  list-style: none;
  display: flex;
`;

export const Avatar = styled.img`
  display: block;
  width: 60px;
  border-radius: 6px;
  margin-right: 20px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 1.14;
`;

export const Status = styled.span`
  margin: 20px;
  padding: 6px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    switch (isOnline) {
      case true:
        return 'green';
      default:
        return 'red';
    }
  }};
`;
