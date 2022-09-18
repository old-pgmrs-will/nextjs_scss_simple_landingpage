import type { NextPage } from 'next'
import Image from 'next/image'

const SectionMessage: NextPage = () => {
  return (
    <>
      <section className="message_section bg-color-gray">
        <div className="message" id="message">
          <h2 className="message_title">MESSAGE</h2>
          <div className="message_body">
            <div className="message_body_column message_body_column-pane1">
              <Image className="message_body_column_image" src="/images/placeimg_960_640_grayscale_tech-4.jpg" layout="fill" objectFit="cover"/>
            </div>
            <div className="message_body_column message_body_column-pane2">
              <p className="message_body_column_text">Ut convallis augue at ipsum interdum, quis blandit nibh ullamcorper. Curabitur vulputate est id blandit consequat. </p>
              <p className="message_body_column_text">Fusce semper laoreet porttitor. In gravida elit in metus placerat ornare. Nam vitae pharetra nulla, eget pharetra tortor.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @use "../../../styles/variables" as v;
        @use "../../../styles/mixins" as m;

        .message{
          max-width: 80rem; // 1280px
          margin-left: auto;
          margin-right: auto;
          .message_title{
            font-size: v.$text-3xl;
          }

          .message_body{
            margin-top: 2rem;
            .message_body_column{
              position: relative;
              width: 100%;
              height: 20rem;
              @include m.screen_for(large){
                max-height: 100%;
              }
              &.message_body_column-pane1{
                border-radius: 0.5rem;
                box-shadow: 0.125rem 0.125rem 0.125rem 0 rgb(0 0 0 / 15%);
                overflow: hidden;
              }
              .message_body_column_image{
              }
              .message_body_column_text{
                font-size: v.$text-2xl;
                line-height: 2.5rem;
              }
            }

            @include m.screen_for(medium){
              @include m.flex(center, flex-start);
              gap: 2rem;
              .message_body_column{
                width: 50%;
                .message_body_column_image{
                }
                .message_body_column_text{
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default SectionMessage
