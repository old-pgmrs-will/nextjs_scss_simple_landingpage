import type { NextPage } from "next";
import type { AppProps } from 'next/app'
import setDataPageAttrForBodyElement from '../libs/Hooks/updateBodyData';
// global CSSの読み込み
import '@/styles/global.scss'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  // パスを見て、_document.tsx の data-page 属性にセットする値を変えるフック処理
  setDataPageAttrForBodyElement();
  return(
    <Component {...pageProps} />
  )
}
export default App

/**
## memo
- Appは全ページ共通で必要な処理を実装。ページ間で共通のレイアウトなども実装できる。
  全ページで共通のstateもここに。
  global css定義もここに。
  SSRされるコンポーネントだが、ライフサイクルメソッド(Mounting/Updating/Unmounting)はクライアント側でも実行される。

- import "@"
   "@" はモジュールインポートのエイリアス。
   "tsconfig.json" の "compilerOptions.paths" で定義できる。（使わなくても良い）
*/
