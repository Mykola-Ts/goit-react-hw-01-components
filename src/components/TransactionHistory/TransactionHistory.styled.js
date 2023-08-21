import styled from 'styled-components';

export const Table = styled.table`
width: 100%;
border-radius: 8px;

text-align: center;

background-color: #fff;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
}
`

export const TableHead = styled.thead`
color: #fff;
background-color: #46caf5
`

export const TableRow = styled.tr`

&:nth-child(2n){
background-color: rgb(242 242 242);
`

export const TableCell = styled.td`
width: calc(100% / 3);
padding: 8px;
`

export const TableHeadCell = styled.th`
width: calc(100% / 3);
padding: 16px 8px;

&:first-child {
    border-top-left-radius: 8px;
}

&:last-child {
    border-top-right-radius: 8px;
}
`
