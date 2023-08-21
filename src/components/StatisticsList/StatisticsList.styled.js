import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
`;

let backgroundColorItems = '';

for (let i = 0; i <= 5; i += 1) {
  backgroundColorItems += `&:nth-child(${
    i + 1
  }) {background-color: ${getRandomHexColor()}};`;
}

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  width: calc(100% / 5);
  border: 1px solid rgb(228 228 228);
  padding: 20px 0;

  color: #fff;

  ${backgroundColorItems}
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
