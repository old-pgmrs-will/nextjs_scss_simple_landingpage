import Head from 'next/head';
import { SITE_NAME, FAVICON, AUTHOR, PAGE_TYPE } from 'global'

interface Props {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
}

const CommonHeader = ({ title, description, keywords, image, url }: Props): JSX.Element => {
  const PAGE_TITLE = SITE_NAME === title ? SITE_NAME : title
  return (
    <Head>
      <title>{PAGE_TITLE}</title>
      {/* 基本設定 */}
      <meta name = "viewport" content = "width=device-width, initial-scale=1" />
      <meta name = "author" content = {AUTHOR} />
      <meta name = "description" content = {description} />
      <meta name = "keywords" content={keywords} />
      {/* OGP */}
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@old_pgmrs_will" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={PAGE_TITLE} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* utilities */}
      <meta name = "referrer" content = "unsafe-url" />
      <meta name = "robots" content = "index, follow" />
      <meta name = "format-detection" content = "telephone=no" />
    </Head>
  )
}

export default CommonHeader

/*
  - 近年は keywords はSEO的に不要という風潮もあり。
  - robotsのindex,followも無くてもよし。無ければ検索エンジンは普通にインデックスする。
*/
