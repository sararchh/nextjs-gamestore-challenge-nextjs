import React from 'react';
// import Cookies from 'js-cookie';
import lodash from 'lodash';

interface CartContextData {
  items: any;
  subtotal: number;
  shipping: number;
  total: number;
  handleAddItem: (item: any) => void;
  handleRemoveItem: (item: any) => void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

interface ProductProps {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
  qtd: number;
  total: number;
}

export const CartContext = React.createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [subtotal, setsubtotal] = React.useState(0)
  const [shipping, setshipping] = React.useState(0)
  const [total, settotal] = React.useState(0)
  const [items, setitems] = React.useState<ProductProps[]>([])

  React.useEffect(() => {
    let cartItems: any = localStorage.getItem('cart');
    setitems(cartItems ? JSON.parse(cartItems) : [])
  }, []);

  React.useEffect(() => {
    if (items?.length > 0) {
      localStorage.setItem('cart', JSON.stringify(items))
    }

  }, [items]);

  const handleAddItem = (product: ProductProps) => {
    const selectedItem:ProductProps = items.filter(i => i.id == product.id)[0];

    if (!selectedItem) {
      setitems([
        ...items, {
          ...product, qtd: 1, total: product.price
        }
      ])
    } else {
      const restant = items.filter(i => i.id != product.id);

      setitems([
        ...restant, {
          ...selectedItem, qtd: selectedItem.qtd + 1 , total: selectedItem.price * (selectedItem.qtd + 1)
        }
      ])

    }

  }


  const handleRemoveItem = (item: ProductProps) => {
    const restant = items.filter(i => i.id != item.id)
    setitems(restant);
  }


  return (
    <CartContext.Provider value={{ items, subtotal, shipping, total, handleAddItem, handleRemoveItem }}>
      {children}
    </CartContext.Provider>
  )
}