
import dynamic from "next/dynamic";
import Router, { useRouter } from 'next/router';
// import "../src/components/Home/ContactUsSection.css";
import "../src/components/Home/FooterSection.css";
// import "../src/components/Home/VideoYoutube.css";
import NProgress from './../src/components/common/Loading/LoadingAllPage';
const Layout = dynamic(() => import('../src/components/Layout/Layout'))
const GlobalState = dynamic(() => import('../src/components/Container/GlobalState'))


function MyApp({ Component, pageProps }) {
  const route = useRouter();
  if (route.asPath.includes('/catalogs')) {

  } else {
    Router.events.on('routeChangeStart', () => NProgress.start());
    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());
  }

  return (
    <GlobalState>
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    </GlobalState>
  );
}

export default MyApp;
