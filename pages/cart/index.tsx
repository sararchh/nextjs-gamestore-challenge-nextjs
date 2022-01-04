import React from 'react';
import Cart from '../../src/cart/index'
import Head from 'next/head'

const CartPage: React.FC = () => {
  return (
    <>
      <Head>
        <title> Game Store || Carrinho</title>
      </Head>
      <Cart />
    </>
  )
}

export default CartPage;