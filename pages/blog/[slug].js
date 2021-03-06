import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import Layout from '@/components/Layout'
import CategoryLabel from '@/components/CategoryLabel'


export default function PostPage({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) {
  return (
    <Layout title={title}>
      {/* <div className='w-full px-10 py-6 bg-base rounded-lg shadow-md mt-6'> */}
      <div className='w-full  bg-base rounded-lg shadow-md'>
        {/* <div className='flex justify-between items-center mt-4'> */}
        <div className='flex justify-between items-center'>
          {/* <h1 className='text-5xl mb-7'>{title}</h1> */}
           <h1 className='text-5xl '></h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>
        <img src={cover_image} alt='' className='w-full' />

        <div className='flex justify-between items-center bg-gray-100 p-2 my-8 rounded'>
          <div className='flex items-center'>
            {/* <img
              src={author_image}
              alt=''
              className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
            />
            <h4>{author}</h4> */}
          </div>
          <div className='mr-4'>{date}</div>
        </div>

        <div className='blog-text mt-2 mr-5 ml-5'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
        <Link href='/blog' className='block text-center border border-gray-500 '>

          <a className='block text-center border border-gray-500 text-gray-800 font-bold rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-main focus:outline-none focus:shadow-outline w-full '>Go Back</a>
            
            </Link>
      </div>
    
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}
