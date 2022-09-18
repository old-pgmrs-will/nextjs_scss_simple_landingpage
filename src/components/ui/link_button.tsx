import React from "react";
import Link from 'next/link'

// 親から渡されるプロパティの受け取り
interface Props {
  className: string,
  caption: string,
  linkUrl: string,
  has_icon: string,
  icon_class: string
}
const Button: React.FC<Props> = ({
  className,
  caption,
  linkUrl,
  has_icon,
  icon_class
}) => {
  return (
    <>
      <div className={`link_button ${className}`}>
        <Link href={ linkUrl }>
          <a className="link_button_body">{ caption }<i className={`${has_icon === 'true' ? icon_class : ''}`}></i></a>
        </Link>
      </div>

      <style jsx>{`
        @use "../../styles/variables" as v;
        @use "../../styles/mixins" as m;
        .link_button{
          width: 14rem;
          margin-left: auto;
          margin-right: auto;
          &.md-center{
            @include m.screen_for(medium){
              margin-left: 0;
            }
          }
          // リンクボタン・サイズのバリエーション
          &.large-button{
            .link_button_body{
              padding: 1.25rem 2rem;
              font-size: v.$text-xl;
            }
          }
          // リンクボタン・サイズのバリエーション
          &.small-button{
            .link_button_body{
              padding: 0.75rem 2rem;
              font-size: v.$text-base;
            }
          }
          // カラーバリエーション
          &.color-theme-3{
            .link_button_body{
              background-color: v.$color-theme-3;
              border: solid 1px v.$color-theme-3;
              color: v.$color-theme-7;
            }
          }

          // カラーバリエーション
          &.color-theme-5{
            .link_button_body{
              background-color: v.$color-theme-5;
              border: solid 1px v.$color-theme-5;
              color: v.$color-theme-1;
            }
          }
          .link_button_body{
            @include m.flex(center, center);
            background-color: v.$color-theme-7;
            border: solid 1px v.$color-theme-7;
            border-radius: 0.25rem;
            margin-left: auto;
            margin-right: auto;
            color: v.$color-theme-1;
            font-weight: bold;
            text-align: center;
            text-decoration: inherit;
            width: 100%;
            > i{
              padding-left: 0.5rem;
            }
            @include m.screen_for(large){
              @include m.flex(center, center);
              margin-left: 0;
            }
          }
        }
      `}</style>
    </>
  );
}

export default Button;