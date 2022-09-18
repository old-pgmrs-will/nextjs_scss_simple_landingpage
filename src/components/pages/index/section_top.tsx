import type { NextPage } from 'next'
import Image from 'next/image'
import UiLinkButton from 'components/ui/link_button'

const SectionTop: NextPage = () => {
  return (
    <>
      <section className="hero_section">
        <div className="hero" id="top">
          <div className="hero_title">
            <h1 className="hero_title_text">Next.js : LP Starter</h1>
            <p className="hero_title_text-sub">Next.js(React) + TypeScript + SCSS</p>
          </div>
          <div className="hero_main">
            <div className="hero_main_description">
              <p className="hero_main_description_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <UiLinkButton className="hero_conversion_linkbutton large-button md-center mt-12" linkUrl="#" caption="About me" has_icon="true" icon_class="fa-solid fa-angle-right"></UiLinkButton>
            </div>
            <div className="hero_main_image">
              <Image className="hero_main_image_src" src="/images/placeimg_960_640_grayscale_tech-5.jpg" alt="top image" layout="fill" objectFit="cover" priority={true} />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @use "../../../styles/variables" as v;
        @use "../../../styles/mixins" as m;
        .hero{
          max-width: 80rem; // 1280px
          margin-left: auto;
          margin-right: auto;
          .hero_title_text-sub{
            font-size: 1.5rem;
            font-weight: bold;
          }
          .hero_main{
            display: grid;
            margin-top: 2rem;
            grid-template-columns: repeat(1, minmax(0,1fr));
            gap: 1rem;
            @include m.screen_for(large){
              grid-template-columns: repeat(2, minmax(0,1fr));
              gap: 2rem;
            }
            .hero_main_image{
              position: relative;
              height: 20rem;
              @include m.screen_for(large){
                height: 100%;
              }
              .hero_main_image_src{
                position: absolute;
                object-fit: cover;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                width: 100%;
                height: 100%;
              }
            }
            .hero_main_description{
              padding-top: 1rem;
              padding-bottom: 1rem;
              .hero_main_description_text{
                padding-top: 1rem;
                font-size: v.$text-2xl;
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default SectionTop
/**
## memo

- "<>" , "</>"
  React.Fragment のショートカット。
  特に JSX では return する要素は単一である必要があるので、"<React.Fragment> ~ </React.Fragment>" で囲むことになるが、
  これのショートカットが "<> ~ </>" となる。

 */
