import React from 'react';
import { CartContext } from '../../contexts/CartContext';

import { Container, ContentImage, ImageProduct, ContentInfo, TextName, TextScore, TextPrice, Button } from './styles';

// import { CartContext } from '../../contexts/CartContext';

interface CardProductsProps {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

function CardProducts({ id, name, price, score, image }: CardProductsProps) {

  const {handleAddItem} = React.useContext(CartContext);


  return (
    <Container>
      <ContentImage>
        <ImageProduct
          src={`/assets/images/${image}`}
          width={220}
          height={220}
          alt="imagens"
          placeholder='blur'
          blurDataURL={`/assets/images/${image}`}
        />
      </ContentImage>
      <ContentInfo>
        <TextName>{name}</TextName>
        <TextScore>Popularidade: {score}</TextScore>
        <TextPrice>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</TextPrice>
        <Button type="button" onClick={() => handleAddItem({id, name, price, score, image})}>Adicionar ao Carrinho</Button>
      </ContentInfo>
    </Container>

  );
}

export default CardProducts;