import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ModuleHeaderMenu from './header_menu'

const Header: NextPage = () => {
  return (
    <>
      <header className="header header-default">
        <div className="header_container">
          <div className="header_logo">
            <a href="#" className="header_logo_link">
            <Image className="header_logo_icon w-14" src="/images/icons/app_logo.png" alt="app_logo" width={64} height={64}/>
            </a>
          </div>
          <div className="header_title">
            <p className="header_title_text">Next.js + SCSS</p>
          </div>
          <ModuleHeaderMenu/>
        </div>
      </header>

      <style jsx>{`
      @use "../../styles/variables" as v;
      @use "../../styles/mixins" as m;
      header{
        background-color: v.$color-theme-1;
        .header_container{
          @include m.flex(space-between, center);
          height: v.$header-height;
          background-color: v.$color-background-quaternary;
          .header_logo{
            @include m.flex(center, center);
            width: 4rem;
            height: 4rem;
            .header_logo_icon{
              width: 100%;
            }
          }
          .header_title{
            .header_title_text{
              font-size: v.$text-3xl;
              color: v.$color-theme-0;
            }
          }
        }
      }
      `}</style>
    </>
  )
}

export default Header