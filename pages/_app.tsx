import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../styles';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Design Test</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
