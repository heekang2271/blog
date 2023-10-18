import type { AppProps } from 'next/app';

import { RecoilRoot } from 'recoil';
import { getCookie } from 'cookies-next';

import { COOKEY_KEY } from '@/libs/const';

import Layout from '@/components/Layout';
import ThemeProvider from '@/components/ThemeProvider';

import GlobalStyles from '@/styles/globalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={pageProps.theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

App.getInitialProps = async ({ ctx, Component }: any) => {
  let pageProps: any = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const cookie = ctx.req.cookies;
  if (cookie) {
    Object.assign(pageProps, {
      theme: getCookie(COOKEY_KEY.THEME, ctx),
    });
  }

  return { pageProps };
};
