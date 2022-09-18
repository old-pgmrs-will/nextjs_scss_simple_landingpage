import type { NextPage } from 'next'
import { useState } from 'react';
import { useBodyScrollLock } from 'components/hooks/useBodyScrollLock'
import sweetScroll from 'sweet-scroll'

const HeaderMenu: NextPage = () => {
  const [openNavMenuState, setOpenNavMenuState] = useState(false)
  const [isLockedBodyScroll, setIsLockedBodyScroll] = useState(false);
  useBodyScrollLock({isLockedBodyScroll})

  // ハンバーガーメニューclick時に、メニューをopen/closeする
  const handleOpenNavMenuState = () => {
    setOpenNavMenuState(!openNavMenuState)
    // 同時に背景(body)のスクロールロックをする
    setIsLockedBodyScroll(!isLockedBodyScroll)
  }

  // ハンバーガーメニューのリスナ
  const listenerHamburgerMenu = () => {
    handleOpenNavMenuState()
  }

  // Navメニューのクリック時のページ内スクロール
  const pageScrollerNavMenu = new sweetScroll({
    trigger: '[data-scroll-nav]',
    duration: 500,
    before: () => {
      // ハンバーガーメニューオープン時はメニューを閉じる
      (openNavMenuState === true) ? (() => {
        handleOpenNavMenuState()
      })() : (() => {
        return false
      })()
    }
  });

  return (
    <>
    <div className="header_nav" id="header_nav">
      {/* #nav_menu のclassは、変数 openNavMenuState === true 時のみ 'is_open' がセットされる */}
      <nav className={`nav ${openNavMenuState ? 'is_open' : ''}`} id="nav_menu" data-aaa="">
        {/* モバイル用ハンバーガーメニュー
            Reactでは、一般的には DOM 要素の生成後に addEventListener を呼び出してリスナを追加する必要は無い。
            代わりに、要素が最初にレンダーされる際にリスナを指定する。 */}
        <button className="hamburger_menu" id="js_hamburger_menu" onClick={() => listenerHamburgerMenu()}>
          {/* ハンバーガーメニューアイコン */}
          <i className="hamburger_icon"></i>
        </button>
        {/* 画面サイズ共通navメニュー */}
        <div className="nav_list">
          <ul className="nav_items" id="js_nav_items">
            <li className="nav_item"><a href="#skills" className="nav_link" data-scroll-nav>SKILLS</a></li>
            <li className="nav_item"><a href="#works" className="nav_link" data-scroll-nav>WORKS</a></li>
            <li className="nav_item"><a href="#message" className="nav_link" data-scroll-nav>MESSAGE</a></li>
            <li className="nav_item"><a href="#contact" className="nav_link" data-scroll-nav>CONTACT</a></li>
          </ul>
        </div>
      </nav>
    </div>

    <style jsx>{`
      @use "../../styles/variables" as v;
      @use "../../styles/mixins" as m;
      .header_nav{
        @include m.flex(center, center);
        position: relative;
        width: 4rem;
        height: 4rem;
        @include m.screen_for(medium){
          @include m.flex(flex-end, center);
        }

        .nav{
          position: absolute;
          width: 100%;
          .nav_list{
            top: v.$header-height;
            .nav_items{
              display: block;
              position: fixed;
              width: 0;
              height: 100%;
              right: 0px;
              margin-top: 1rem;
              transition: 0.3s;
              z-index: 1;
              visibility: hidden;
              overflow-y: hidden;
              background: v.$color-theme-3;
              .nav_item{
                @include m.flex(center, center);
                padding-top: 1rem;
                padding-bottom: 1rem;
                padding-left: 3rem;
                padding-right: 3rem;
                .nav_link{
                  font-size: 2rem;
                  color: v.$color-theme-0;
                  text-decoration: none;
                }
              }
            }
          }
          &.is_open{
            .nav_list{
              .nav_items{
                width: 100%;
                height: 100%;
                transition: 0.3s;
                visibility: visible;
                overflow-y: auto;
              }
            }
          }
        }
      }

      // モバイル表示時用のハンバーガーメニューボタン
      .hamburger_menu{
        @include m.flex(center, center);
        width: 3rem;
        height: 3rem;
        margin: auto;
        border: solid 1px v.$color-theme-4;
        background-color: v.$color-theme-3;
      }
      // ハンバーガーメニュー
      .hamburger_icon {
        position: relative;
        width: 20px;
        // ハンバーガーメニューの中央ライン
        border-top: 2px solid v.$color-theme-8;
        // ハンバーガーメニューの上下ライン共通
        &::before,
        &::after{
          content: '';
          display: block;
          position: absolute;
          top: 0;
          width: 20px;
          height: 2px;
          border-top: 2px solid v.$color-theme-8;
          background: currentColor;
          transition: 0.3s;
        }
        &::before{
          // ハンバーガーメニューの上ライン位置
          margin-top: -11px;
        }
        &::after{
          // ハンバーガーメニューの下ライン位置
          margin-top: 7px;
        }
      }
      // メニューopen時のハンバーガーメニューの[✕]化の動作
      .nav.is_open{
        .hamburger_icon{
          border-top-color: transparent;
          &::before {
            transform: rotate(135deg);
            top: 9px;
          }
          &::after {
            transform: rotate(-135deg);
            top: -9px;
          }
        }
      }

      // タブレット幅以上の表示
      @include m.screen_for(medium){
        .header_nav{
          max-height: 3rem;
          margin-left: auto;
          .nav{
            width: auto;
            margin-right: 3rem;
            .nav_list{
              top: 1rem;
              .nav_items{
                @include m.flex(center, center);
                visibility: visible;
                position: relative;
                width: auto;
                height: auto;
                padding-top: 0;
                gap: 1rem;
                transition: 0s;
                background: v.$color-theme-6;
                .nav_item{
                  padding-left: 0.5rem;
                  padding-right: 0.5rem;
                  .nav_link{
                    font-size: v.$text-lg;
                  }
                }
              }
            }
          }
        }
        // タブレット幅以上の場合、モバイル用ハンバーガーメニューは非表示
        .hamburger_menu{
          display: none;
        }
      }
    `}</style>
    </>
  )
}
export default HeaderMenu
