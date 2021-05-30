import Head from 'next/head'
import Header from './Header'
import Search from './Search'
import Footer from './Footer'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Search />
      <main className='container mx-auto my-7'>{children}</main>
      <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  title: 'マボログ',
  keywords: 'ファッション, ライフスタイル, 旅行',
  description: 'シティーボーイの日常'
}
