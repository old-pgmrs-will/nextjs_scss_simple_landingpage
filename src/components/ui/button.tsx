import React from "react";

// 親から渡されるプロパティの受け取り
interface Props {
  className: string,
  caption: string;
}
const Button: React.FC<Props> = ({
  className,
  caption
}) => {
  return (
    <>
      <div className={`button ${className}`}>
        <button className="button_body">{ caption }</button>
      </div>
      <style jsx>{`
        @use "../../styles/variables" as v;
        @use "../../styles/mixins" as m;
        .button{
          width: 14rem;
          margin-left: auto;
          margin-right: auto;
          &.md-center{
            @include m.screen_for(medium){
              margin-left: 0;
            }
          }
          .button_body{
            @include m.flex(center, center);
            background-color: v.$color-theme-3;
            border: solid 1px v.$color-theme-3;
            border-radius: 0.25rem;
            margin-left: auto;
            margin-right: auto;
            padding: 0.75rem 2rem;
            color: v.$color-theme-9;
            font-size: v.$text-xl;
            font-weight: bold;
            text-align: center;
            text-decoration: inherit;
            width: 100%;
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