import styled from 'styled-components';
import Image from 'next/image'
import media from "styled-media-query";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 200px;

  h3{
    text-align:center;
    margin: 10px 0px;
  }

  ${media.lessThan('medium')`
  padding: 0 20px ;

`};

`;
export const CardProducts = styled.div`
  height:150px;
  width: 100%;
  background-color:var(--shape);
  border-bottom: 1px solid #a9a9a9;
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  padding: 5px;
  align-items: center;
`;

export const ImageProduct = styled(Image)`
  width: 120px;
  height: 120px;
  margin: 0 10px;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  width: 500px;
  height: 120px;
  padding: 0 10px;

  p{ 
    font-size:12px
  }
`;

export const ContentValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  width: 300px;
  height: 120px;
  padding: 0 10px;

  >*{
    &:first-child{
      font-size:12px;
    }
    
    &:nth-child(2){
      font-size:12px;
      font-weight:bold;
    }
  }

`;

export const Button = styled.button`
  color: var(--red);
  border:none;
  outline:none;
  background: transparent;
  width: 50px;
  margin-top: 20px;
`;