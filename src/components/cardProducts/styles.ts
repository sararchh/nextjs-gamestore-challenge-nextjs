import styled from 'styled-components';
import media from "styled-media-query";
import Image from 'next/image';

export const Container = styled.div`
  background-color: var(--shape);
  width: 220px;
  height: 320px;
  margin:  5px 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 19px -6px #00000050;
  
  :hover { 
    box-shadow: 0px 0px 19px -6px #00000080;
  }

${media.lessThan('medium')`
width: 140px;
height: 250px;
margin: 5px 20px;

`};
`;

export const ImageProduct = styled(Image)`
width: auto ;
height: 220px;

`;

export const ContentImage = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`;

export const ContentInfo = styled.div`
display: flex;
flex-direction: column;
padding: 5px 10px;
`;

export const Button = styled.button`
background:var(--orange);
border: none;
border-radius:2px;
width: 200px;
height:30px;
color: var(--shape);
font-weight: bold;
margin-top: 5px;


${media.lessThan('small')`
width: 120px;
font-size: 9px;

`};

`;

export const TextName = styled.p`
font-size:14px;
font-weight: bold;
color: var(--text-title);


${media.lessThan('medium')`
font-size:12px;

`};
`;

export const TextScore = styled.p`
font-size:12px;
color: var(--text-title);
`;

export const TextPrice = styled.p`
font-size:13px;
font-weight:bold;
color: var(--text-title);
`;
