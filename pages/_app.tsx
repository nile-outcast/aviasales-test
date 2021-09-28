import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from "next/head";
import { Header } from '../components/Header';
import { Conteiner } from "../components/page";
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>Aviasales Test</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
    </Head>
    <Header />
    <Conteiner>
      <Component {...pageProps} />
    </Conteiner>
  </>;
}

export default MyApp;