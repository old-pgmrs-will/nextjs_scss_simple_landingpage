import type { NextPage } from 'next'
import Image from 'next/image'
import sweetScroll from 'sweet-scroll'

const Footer: NextPage = () => {

  // フッターメニューから各sectionへのscroll
  const pageScrollerFooterNav = new sweetScroll({
    trigger: '[data-scroll_footer_nav]',
    duration: 500
  })

  return (
    <>
      <footer className="footer footer-default">
        <div className="footer_container">
          <div className="footer_brand">
            <div className="footer_logo">
              <a href="#" className="footer_logo_link">
                <Image className="footer_logo_icon w-14" src="/images/icons/app_logo.png" alt="app_logo" width={64} height={64} />
              </a>
            </div>
            <p className="footer_brand_text">Nuxt3 + SCSS : LP Starter</p>
          </div>
          <div className="footer_menu">
            <nav className="footer_nav">
              <a href="#skills" className="footer_nav_link" data-scroll_footer_nav>SKILLS</a>
              <a href="#works" className="footer_nav_link" data-scroll_footer_nav>WORKS</a>
              <a href="#message" className="footer_nav_link" data-scroll_footer_nav>MESSAGE</a>
              <a href="#contact" className="footer_nav_link" data-scroll_footer_nav>CONTACT</a>
            </nav>
            <nav className="footer_socialmedia">
              <a href="https://github.com/old-pgmrs-will" className="footer_socialmedia_link" target="_blank" rel="noopener noreferrer"><i className="footer_icon fa-brands fa-github"></i></a>
              <a href="https://codepen.io/old_pgmrs_will" className="footer_socialmedia_link" target="_blank" rel="noopener noreferrer"><i className="footer_icon fa-brands fa-codepen"></i></a>
              <a href="https://twitter.com/old_pgmrs_will" className="footer_socialmedia_link" target="_blank" rel="noopener noreferrer"><i className="footer_icon fa-brands fa-twitter"></i></a>
            </nav>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @use "../../styles/variables" as v;
        @use "../../styles/mixins" as m;

        footer{
          min-height: 5rem;
          margin-top: auto;
          white-space: nowrap;
          background-color: v.$color-theme-2;
          .footer_container{
            width: 100%;
            .footer_brand{
              @include m.flex(center, center);
              padding-top: 2rem;
              .footer_logo{
                @include m.flex(center, center);
                background-color: v.$color-theme-4;
                width: 2rem;
                height: 2rem;
                .footer_logo_link{
                  display: contents;
                  .footer_logo_icon{
                    width: 3rem;
                  }
                }
              }
              .footer_brand_text{
                margin-left: 1rem;
                font-weight: 600;
              }
            }
            .footer_menu{
              @include m.flex(center, center, column);
              .footer_nav{
                @include m.flex(center, center, column);
                margin-top: 2rem;
                margin-bottom: 1rem;
                .footer_nav_link{
                  padding-top: 0.5rem;
                  padding-bottom: 0.5rem;
                  font-size: 1.25rem;
                }
              }
              .footer_socialmedia{
                margin-top: 1rem;
                margin-bottom: 2rem;
                .footer_socialmedia_link{
                  padding-left: 1rem;
                  padding-right: 1rem;
                  font-size: 1.5rem;
                }
              }
            }
          }
        }

        @include m.screen_for(medium){
          footer{
            .footer_container{
              @include m.flex(space-between, center);
              padding-left: 1rem;
              padding-right: 1rem;
              .footer_brand{
                padding-top: inherit;
                .footer_logo{
                  width: 1.5rem;
                  height: 1.5rem;
                  .footer_logo_link{
                    .footer_logo_icon{
                      font-size: 1rem;
                    }
                  }
                }
              }
              .footer_menu{
                @include m.flex(center, center);
                .footer_nav{
                  @include m.flex(center, center);
                  margin-top: 4rem;
                  margin-bottom: 4rem;
                  margin-right: 3rem;
                  .footer_nav_link{
                    margin-left: 0.5rem;
                    margin-right: 0.5rem;
                    text-decoration: none;
                  }
                }
                .footer_socialmedia{
                  margin-top: 4rem;
                  margin-bottom: 4rem;
                  .footer_socialmedia_link{
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default Footer
