import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (err) {
      console.error(err);
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="/assets/vendor/jquery/jquery.min.js"></script>
          <script src="/assets/vendor/jquery.appear/jquery.appear.min.js"></script>
          <script src="/assets/vendor/jquery.easing/jquery.easing.min.js"></script>
          <script src="/assets/vendor/jquery.cookie/jquery.cookie.min.js"></script>
          <script src="/assets/vendor/popper/umd/popper.min.js"></script>
          <script src="/assets/vendor/bootstrap/js/bootstrap.min.js"></script>
          <script src="/assets/vendor/jquery.validation/jquery.validate.min.js"></script>
          <script src="/assets/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"></script>
          <script src="/assets/vendor/jquery.gmap/jquery.gmap.min.js"></script>
          <script src="/assets/vendor/lazysizes/lazysizes.min.js"></script>
          <script src="/assets/vendor/isotope/jquery.isotope.min.js"></script>
          <script src="/assets/vendor/owl.carousel/owl.carousel.min.js"></script>
          <script src="/assets/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
          <script src="/assets/vendor/vide/jquery.vide.min.js"></script>
          <script src="/assets/vendor/vivus/vivus.min.js"></script>
          <script src="/assets/js/theme.js"></script>
          <script src="/assets/vendor/circle-flip-slideshow/js/jquery.flipshow.min.js"></script>
          <script src="/assets/js/views/view.home.js"></script>
          <script src="/assets/js/custom.js"></script>
          <script src="/assets/js/theme.init.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
