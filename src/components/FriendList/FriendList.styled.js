import styled from 'styled-components';

export const List = styled.ul`
width: 100%;
border-radius: 8px;
padding: 20px;

background-color: #fff;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
}
`;

export const ListItem = styled.li`
display: flex;
align-items: center;
gap: 20px;

border-radius: 8px;
border: 2px solid rgb(228 228 228);
padding: 16px 20px;

box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

&:not(:last-child) {
    margin-bottom: 20px;
}
`;
