import styled from 'styled-components';

const getColorStatus = props => {
  switch (props.status) {
    case 'online':
      return 'green';

    default:
      return 'red';
  }
}

export const Status = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;

  background-color: ${getColorStatus}}};
`;

export const Avatar = styled.img`
width: 100px;
height: 100px;
border-radius: 8px;
padding: 8px 8px 0 8px;

box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const Name = styled.p`
font-size: 22px;
font-weight: 700;
line-height: 1.09;
letter-spacing: -0.44px;
`;
