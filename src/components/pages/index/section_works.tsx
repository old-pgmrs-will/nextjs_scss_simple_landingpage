import type { NextPage } from 'next'
import UiLinkButton from 'components/ui/link_button'

const SectionWorks: NextPage = () => {
  return (
    <>
      <section className="works_section">
        <div className="works" id="works">
          <h2 className="work_title">WORKS</h2>
          <p className="work_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <ul className="work_item_list">
            {/* imageデータは https://placeimg.com/ より */}
            <li className="work_item_card">
              <img className="work_item_image" src="/images/placeimg_960_640_grayscale_tech-1.jpg" loading="lazy"/>
              <div className="work_item_content">
                <h4 className="work_item_title">title</h4>
                <p className="work_item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
              <UiLinkButton linkUrl="#" className="mt-8 small-button color-theme-5 md-center" caption="Browse My Work" has_icon="true" icon_class="fa-solid fa-angle-right"></UiLinkButton>
            </li>
            <li className="work_item_card">
              <img className="work_item_image" src="/images/placeimg_960_640_grayscale_tech-2.jpg" loading="lazy"/>
              <div className="work_item_content">
                <h4 className="work_item_title">title</h4>
                <p className="work_item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
              <UiLinkButton linkUrl="#" className="mt-8 small-button color-theme-5 md-center" caption="Browse My Work" has_icon="true" icon_class="fa-solid fa-angle-right"></UiLinkButton>
            </li>
            <li className="work_item_card">
              <img className="work_item_image" src="/images/placeimg_960_640_grayscale_tech-3.jpg" loading="lazy"/>
              <div className="work_item_content">
                <h4 className="work_item_title">title</h4>
                <p className="work_item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
              <UiLinkButton linkUrl="#" className="mt-8 small-button color-theme-5 md-center" caption="Browse My Work" has_icon="true" icon_class="fa-solid fa-angle-right"></UiLinkButton>
            </li>
          </ul>
        </div>
      </section>

      <style jsx>{`
        @use "../../../styles/variables" as v;
        @use "../../../styles/mixins" as m;

        .works{
          max-width: 80rem; // 1280px
          margin-left: auto;
          margin-right: auto;
          .work_title{
            font-size: v.$text-3xl;
          }
          .work_description{
            margin-top: 2rem;
            margin-bottom: 2rem;
            font-size: v.$text-2xl;
          }
        }
        .work_item_list{
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-column-gap: v.$item-gap-base;
          grid-row-gap: v.$item-gap-base;
          .work_item_card{
            margin-bottom: 2rem;
            .work_item_image{
              width: 100%;
              border-radius: 0.5rem;
              box-shadow: 0.125rem 0.125rem 0.125rem 0 rgb(0 0 0 / 15%);
            }
            .work_item_content{
              .work_item_title{
                font-size: v.$text-2xl;
                line-height: 3rem;
              }
              .work_item_description{
                font-size: v.$text-lg;
                line-height: 1.5rem;
              }
            }
          }
          @include m.screen_for(medium){
            // タブレット向け画面では横2カラム構成
            grid-template-columns: repeat(2, 1fr);
            .work_item_card{
              position: relative;
              &:nth-of-type(3) {
                left: calc(50% + (v.$item-gap-base) / 2);
              }
            }
          }
          @include m.screen_for(large){
            // PC向け画面では横3カラム構成
            grid-template-columns: repeat(3, 1fr);
            .work_item_card{
              &:nth-of-type(3) {
                left: auto;
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default SectionWorks