import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="google-site-verification" content="O5Vmi27x6-HDjOjjN9xsWHNJFmJKNzXwvKvh9maKKDM" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-63068361-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `<!-- Global site tag (gtag.js) - Google Analytics -->
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'UA-63068361-1');
                </script>
                `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
