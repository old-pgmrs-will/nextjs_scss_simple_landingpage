import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * 画面レンダリングの際のフック処理
 * ※ このコードの意図:
 *   ページのDOM生成後に何らかの要素に対して何か操作をしたい場合のサンプル。
 */
const SetDataPageAttrForBodyElement = () => {
  const { pathname } = useRouter();
  useEffect(() => {
    // パスによって BODY 要素の data 属性を切り替える
    let element = document.getElementById('page_body');
    if(element){
      element.dataset.page = fetchDataPage(pathname);
    }
  }, [pathname]);
}

export const fetchDataPage = (pathname: string): string => {
  switch (pathname) {
    case '/':
      return 'page-top';
    case '/about':
      return 'page-about';
    default:
      return '';
  }
};

export default SetDataPageAttrForBodyElement
