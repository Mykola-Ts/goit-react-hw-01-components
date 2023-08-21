import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  width: calc(100% / 5);
  border: 1px solid rgb(228 228 228);
  padding: 20px 0;

  background-color: rgb(242 242 242);
`;
