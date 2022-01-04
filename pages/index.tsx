import React from 'react';
import type { NextPage } from 'next'
import Home from '../src/home/index'

import productsData from '../db/products.json'

interface ProductsProps {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

const HomePage: NextPage = () => {
  const [products, setProducts] = React.useState<ProductsProps[]>(productsData);
  const [loading, setLoading] = React.useState<Boolean>(true);

  React.useEffect(()=>{
    setTimeout(()=>setLoading(false), 3000)
  },[]);

  return (
    <Home data={products} loading={loading}/>

  )
}

export default HomePage
