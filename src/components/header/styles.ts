import styled from 'styled-components';
import media from "styled-media-query";
import Image from 'next/image';

export const Container = styled.div`
height: 60px;
background-color:var(--orange);
display:flex;
justify-content: space-between;
padding: 5px 60px ;

a{
  cursor: pointer;
}

${media.lessThan('small')`
padding: 5px 20px ;

`};

h3{
  color: var(--shape);
  font-weight:bold;
}

`;

export const ContentLogo = styled.a`
display:flex;
flex-direction: row;
align-items: center;
text-decoration: none;
`;

export const Logo = styled(Image)`
height: 50px;
width:50px;
`;

interface Props {
  hasItems: boolean;
}

export const Button = styled.a<Props>`
&{
  height: 50px;
width:50px;
border: none;
background: transparent;
margin-top: ${({ hasItems }) => hasItems ? '-7px' : '0'};

img{
  width:35px;
  height:35px;
  color: var(--text-title) ;
}
}
`;

export const SpanIcon = styled.div`
z-index: 4;
height: 15px;
width: 15px;
border-radius:30px;
background: var(--red);
display: flex;
align-items: center;
justify-content: center;
position: relative;
left: 25px;
top: 15px;

p{
  font-size:9px;
  color: var(--shape)
}
`;