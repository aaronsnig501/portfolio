import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-63068361-2');
      `
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-63068361-2"></script>
          <script
            dangerouslySetInnerHTML={this.setGoogleTags()}
          />
          <meta name="google-site-verification" content="O5Vmi27x6-HDjOjjN9xsWHNJFmJKNzXwvKvh9maKKDM" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
