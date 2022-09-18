import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { FAVICON } from 'global'

type Props = {}
class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja" >
        <Head>
          {/* 外部css読み込み（ref = preload, stylesheet はブラウザ要件次第） */}
          <link rel = "preload" href = "https://cdn.jsdelivr.net/npm/reseter.css" as="style" />
          <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/reseter.css" />
          <link rel = "preload" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" as="style" />
          <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
          <link rel = "preload" href = "https://fonts.googleapis.com/earlyaccess/notosansjp.css" as="style" />
          <link rel = "stylesheet" href = "https://fonts.googleapis.com/earlyaccess/notosansjp.css" />
          <link rel="icon" href = {FAVICON} />
          <link rel="shortcut icon" href = {FAVICON} />
          <link rel="apple-touch-icon" href = {FAVICON} />
          {/* 高速化対応（先読み系・必要に応じて） */}
          {/*
          <link rel = "preconnect" href="https://fonts.googleapis.com" />
          <link rel = "dns-prefetch" href = "https://fonts.googleapis.com" />
          <link rel = "preconnect" href = "https://fonts.gstatic.com" />
          <link rel = "dns-prefetch" href = "https://fonts.gstatic.com"/>
          */}
        </Head>
        <body id='page_body' data-page=''>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document

/**
## memo

- Documentは "HTML", "HEAD", "BODY" などの要素のカスタム定義用のコンポーネント。
  Next.js の Page コンポーネントはデフォルトで <Html/>, <Head/>, <Main/>, <NextScript/> の定義がなされるが、それを拡張したい場合に使用。
- _app.tsx 内では HTML, BODY 要素の属性を直接カスタマイズできないので、その場合も Document を利用する。
- Document はサーバサイドのみで実行されるので、クライアント側で実行したい処理は実装しない。
- CSS定義なども、ここでは実装しない。(global CSS は、_app.tsx に実装)
- '<link rel="stylesheet">' なども、
*/
