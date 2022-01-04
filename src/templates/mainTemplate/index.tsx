import React from 'react';
import Header from '../../components/header';

type ContentType ={
  content: React.ReactNode,
}

const MainTemplate = ({content}: ContentType) => {
  return (
    <>
      <Header/>
      {content}
    </>
  )
}

export default MainTemplate;