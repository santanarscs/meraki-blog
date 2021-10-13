

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx:DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}