import 'react';

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    // Next.js v12.2 を使った場合、VSCode上で "<style jsx>" の "jsx" プロパティが、
    // 型 'DetailedHTMLProps<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>' に存在しない
    // というエラーへの対応。先々的にこの定義は不要になるかも。
    jsx?: boolean;
    global?: boolean;
  }
}
