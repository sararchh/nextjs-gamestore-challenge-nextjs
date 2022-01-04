import styled from 'styled-components';
import media from "styled-media-query";

export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px 100px;
  flex-wrap: wrap;
  justify-content:center;


${media.lessThan('medium')`
padding: 5px 20px ;

`};
  
`;
export const TextTitle = styled.h3`
  text-align: center;
  margin-top: 15px;
  color: var(--text-title);
`;