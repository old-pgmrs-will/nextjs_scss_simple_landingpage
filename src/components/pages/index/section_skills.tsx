import type { NextPage } from 'next'

const SectionSkills: NextPage = () => {
  return (
    <>
      <section className="skills_section bg-color-gray">
        <div className="skills" id="skills">
          <h2 className="skills_title">SKILLS</h2>
          <p className="skills_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <div className="skill_item_list">
            <div className="skill_item_card">
              <div className="skill_item_icon"><i className="fa-brands fa-vuejs"></i></div>
              <div className="skill_item_content">
                <h4 className="skill_item_title">Vue + Nuxt.js</h4>
                <p className="skill_item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
            <div className="skill_item_card">
              <div className="skill_item_icon"><i className="fa-brands fa-react"></i></div>
              <div className="skill_item_content">
                <h4 className="skill_item_title">React + Next.js</h4>
                <p className="skill_item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
            <div className="skill_item_card">
              <div className="skill_item_icon"><i className="fa-brands fa-node-js"></i></div>
              <div className="skill_item_content">
                <h4 className="skill_item_title">node.js + Express</h4>
                <p className="skill_item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
            <div className="skill_item_card">
              <div className="skill_item_icon"><i className="fa-brands fa-css3-alt"></i></div>
              <div className="skill_item_content">
                <h4 className="skill_item_title">CSS3 + PostCSS</h4>
                <p className="skill_item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
            <div className="skill_item_card">
              <div className="skill_item_icon"><i className="fa-brands fa-js-square"></i></div>
              <div className="skill_item_content">
                <h4 className="skill_item_title">JavaScript + TypeScript</h4>
                <p className="skill_item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
            <div className="skill_item_card">
              <div className="skill_item_icon"><i className="fa-brands fa-wordpress-simple"></i></div>
              <div className="skill_item_content">
                <h4 className="skill_item_title">WordPress + PHP</h4>
                <p className="skill_item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @use "../../../styles/variables" as v;
        @use "../../../styles/mixins" as m;
        .skills{
          max-width: 80rem; // 1280px
          margin-left: auto;
          margin-right: auto;
          .skills_title{
            font-size: v.$text-3xl;
          }
          .skills_description{
            margin-top: 2rem;
            margin-bottom: 2rem;
            font-size: v.$text-2xl;
          }
        }

        .skill_item_list{
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-column-gap: v.$item-gap-sm;
          grid-row-gap: v.$item-gap-sm;
          @include m.screen_for(medium){
            // タブレット向け画面では横2カラム構成
            grid-template-columns: repeat(2, 1fr);
          }
          @include m.screen_for(large){
            // PC向け画面では横3カラム構成
            grid-template-columns: repeat(3, 1fr);
          }
          .skill_item_card{
            background-color: v.$color-theme-1;
            border: solid 1px v.$color-theme-4;
            border-radius: 0.5rem;
            padding: 2rem 2rem;
            .skill_item_icon{
              padding-bottom: 1rem;
              font-size: v.$text-3xl;
            }
            .skill_item_content{
              .skill_item_description{
                margin-top: 1rem;
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default SectionSkills
