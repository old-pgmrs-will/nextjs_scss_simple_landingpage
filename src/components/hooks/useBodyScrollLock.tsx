/**
 * "body-scroll-lock" を使うための hook
 * https://www.npmjs.com/package/body-scroll-lock
 */
import { useEffect } from 'react';
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

type Props = {
  isLockedBodyScroll: boolean
}

export function useBodyScrollLock({ isLockedBodyScroll }: Props){
  useEffect(() => {
    const body = document.querySelector<HTMLElement>('body')
      if(body === null){
        return;
      }
      if(isLockedBodyScroll){
        disableBodyScroll(body);
      }else{
        enableBodyScroll(body);
      }
      return () => clearAllBodyScrollLocks();
  }, [isLockedBodyScroll])
}
