import React from 'react';
import { CartContext } from '../contexts/CartContext';
import MainTemplate from '../templates/mainTemplate';

import { CardContainer, CardProducts, ImageProduct, ContentInfo, ContentValue, Button } from './styles';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
  qtd: number;
  total: number;
}

const Cart: React.FC = () => {
  const { items: ProductsCart, handleRemoveItem } = React.useContext(CartContext);

  return (
    <MainTemplate
      content={
        <CardContainer>
          <h3>Seu Carrinho</h3>


          {ProductsCart.sort((a: any, b: any) => a.name > b.name).map((item: ProductProps, index: number) => {
            return (

              <CardProducts key={index}>
                <ImageProduct width={120} height={120} src={`/assets/images/${item.image}`} alt="image-product"/>
                <ContentInfo>
                  <h4>{item.name}</h4>
                  <p>Valor Unitário: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}</p>
                </ContentInfo>

                <ContentValue>
                  <p>Subtotal</p>
                  <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.total)}</p>
                  <Button onClick={() => handleRemoveItem(item)}>Remover</Button>
                </ContentValue>
              </CardProducts>
            )
          })}

          <p>Total: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(ProductsCart.reduce((acc: number, i: any) => acc + i.total, 0))} </p>
        </CardContainer>
      }
    />
  )
}

export default Cart;