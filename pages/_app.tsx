import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CartProvider } from '../src/contexts/CartContext'
import { GlobalStyle } from '../styles/globalstyles'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Head>
        <title>Game Store</title>
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
