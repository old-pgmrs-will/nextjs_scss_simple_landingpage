import type { NextPage } from 'next'
import Head from '../head'

import PagesIndexSectionTop from '../components/pages/index/section_top'
import PagesIndexSectionSkills from '../components/pages/index/section_skills'
import PagesIndexSectionWorks from '../components/pages/index/section_works'
import PagesIndexSectionMessage from '../components/pages/index/section_message'
import PagesIndexSectionContact from '../components/pages/index/section_contact'
import Header from  '../components/modules/header'
import Footer from  '../components/modules/footer'

const containerClass: string = "page-index";

const Index: NextPage = () => {
  return (
    <>
      <Head
        title={'Next.js + SCSS : LP Starter.'}
        description={'This page is "Next.js + SCSS : LP Starter".'}
        keywords={'Next.js, SCSS, TypeScript Landing page'}
        image={'https://nuxt3-scss-ts-lp-starter.netlify.app/ogp_image_index.png'}
        url={'https://nuxt3-scss-ts-lp-starter.netlify.app'}
       />

      <article className="contents" id="page_root">
        <Header/>
        <PagesIndexSectionTop/>
        <PagesIndexSectionSkills/>
        <PagesIndexSectionWorks/>
        <PagesIndexSectionMessage/>
        <PagesIndexSectionContact/>
        <Footer/>
      </article>

      <style jsx>{`
        // ページ共通
        .contents{
          display: grid;
          grid-template-rows: auto 1fr auto;
          grid-template-columns: 100%;
          min-height: 100vh;
        }
      `}</style>
    </>
  )
}

export default Index
