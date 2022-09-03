import type { AppProps } from 'next/app';
import { Router, useRouter } from 'next/router';
import MainPage from '@/components/layouts/MainPage';
import paths, { pathsWithoutAutorization } from 'shared/constants/paths';

//Load Styles
import '../styles/globals.css';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';

import NProgress from 'nprogress'; //nprogress module
import { useEffect } from 'react';
import { validateSessionExpiration } from 'shared/utils/validations';
//Route Events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const Children = ({ children }: any) => <>{children}</>;

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const sessionExpired = validateSessionExpiration();
    router.pathname = sessionExpired ? paths.login : paths.home;
  }, []);

  return (
    <>
      {pathsWithoutAutorization.includes(router.pathname) ? (
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
