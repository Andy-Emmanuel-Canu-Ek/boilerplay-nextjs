import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router, { useRouter } from 'next/router';
import MainPage from '@/components/layouts/MainPage';
import 'react-datepicker/dist/react-datepicker.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      {['/login'].includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <MainPage>
          <div className="container">
            <Component {...pageProps} />
          </div>
        </MainPage>
      )}
    </>
  );
}

export default MyApp;
