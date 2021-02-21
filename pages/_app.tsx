import { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Design Test</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <title>The Y 컨설팅 - The Why Company</title>

        <meta name="keywords" content="커뮤니케이션, 교육, 강의" />
        <meta name="description" content="Community, Education, edu" />
        <meta name="author" content="thewhy.kr" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
        />

        <link
          id="googleFonts"
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800%7CShadows+Into+Light&display=swap"
          rel="stylesheet"
          type="text/css"
        />

        <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendor/fontawesome-free/css/all.min.css" />
        <link rel="stylesheet" href="/assets/vendor/animate/animate.compat.css" />
        <link
          rel="stylesheet"
          href="/assets/vendor/simple-line-icons/css/simple-line-icons.min.css"
        />
        <link rel="stylesheet" href="/assets/vendor/owl.carousel/assets/owl.carousel.min.css" />
        <link
          rel="stylesheet"
          href="/assets/vendor/owl.carousel/assets/owl.theme.default.min.css"
        />
        <link rel="stylesheet" href="/assets/vendor/magnific-popup/magnific-popup.min.css" />

        <link rel="stylesheet" href="/assets/css/theme.css" />
        <link rel="stylesheet" href="/assets/css/theme-elements.css" />
        <link rel="stylesheet" href="/assets/css/theme-blog.css" />
        <link rel="stylesheet" href="/assets/css/theme-shop.css" />

        <link rel="stylesheet" href="/assets/vendor/circle-flip-slideshow/css/component.css" />
        <link id="skinCSS" rel="stylesheet" href="/assets/css/skins/default.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />
        <script src="/assets/vendor/modernizr/modernizr.min.js"></script>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default App;
