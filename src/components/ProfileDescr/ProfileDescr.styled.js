import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

padding: 40px 20px;
`

export const Avatar = styled.img`
width: 240px;
height: 240px;
border-radius: 50%;
padding-top: 16px;

box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`

export const Name = styled.p`
font-size: 24px;
font-weight: 700;
line-height: 1.17;
letter-spacing: -0.96px;
text-transform: capitalize;
`

export const Info = styled.p`
color: gray;
`
