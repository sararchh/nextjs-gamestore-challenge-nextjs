import React from 'react';
import CardProducts from '../components/cardProducts';
import MainTemplate from '../templates/mainTemplate';

import { ContainerProducts, TextTitle } from './styles';

type HomeProps = {
  data: ProductsTypes[],
  loading: Boolean
}

type ProductsTypes = {
  id: number,
  name: string,
  price: number,
  score: number,
  image: string,
}


const Home = ({ data, loading }: HomeProps) => {
  return (
    <MainTemplate
      content={
        <>
          {loading ?
            <p>Carregando...</p>
            :
            <>
              <TextTitle>A SUA LOJA DE GAMES PREFERIDA</TextTitle>
              <ContainerProducts>
                {data.map((product: ProductsTypes) => {
                  return (
                    <CardProducts
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      score={product.score}
                      image={product.image}
                    />
                  )
                })}
              </ContainerProducts>
            </>
          }

        </>
      }
    />
  )
}

export default Home;