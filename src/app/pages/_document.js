import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="A simple note-taking app" />
          <meta name="keywords" content="notes, to-do, app" />
          <meta property="og:title" content="Note Taking App" />
          <meta property="og:description" content="A simple note-taking app" />
          <meta property="og:image" content="/images/og-image.jpg" />
          <meta property="og:url" content="https://my-note-taking-app.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
