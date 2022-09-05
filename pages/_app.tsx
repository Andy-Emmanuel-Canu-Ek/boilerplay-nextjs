import { Router, useRouter } from 'next/router';
import type { AppProps } from 'next/app';

//Load Styles
import '../styles/globals.css';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';

import NProgress from 'nprogress'; //nprogress module
import { publicPaths } from 'shared/constants/paths';
import MainPage from '@/components/layouts/MainPage';

//Route Events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  const router = useRouter();

  return (
    <>
      {publicPaths.includes(router.pathname) ? (
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
