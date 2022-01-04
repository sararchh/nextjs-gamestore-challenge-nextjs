import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

import { CartContext } from '../../contexts/CartContext';

import { Container, Logo, ContentLogo, Button, SpanIcon } from './styles';

const items: any = [];

const Header: React.FC = () => {
  const {items} = React.useContext(CartContext);



  return (
    <Container>
      <Link href="/">
        <ContentLogo  >
          <Logo width={50} height={50} src={'/assets/images/logo.svg'} alt="logo" />
          <h3>GameStore</h3>
        </ContentLogo>
      </Link>

      <Link href="/cart" >
        <Button hasItems={Boolean(items.length > 0)} >
          {Boolean(items.length > 0) && <SpanIcon><p>{items.length}</p></SpanIcon>}
          <Image width={35} height={35} src={`/assets/images/cart-icon.svg`} alt="cart" />
        </Button>
      </Link>
    </Container>
  );
}

export default Header;