import Link from 'next/link'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { getPosts } from '@/lib/posts'
// import {MdKeyboardArrowRight } from 'react-icons/fa'

export default function HomePage({ posts }) {
  return (
    <Layout>
      <h1 className='text-5xl border-b-4 p-5 '>Latest Posts</h1>

      <div className='mr-5 ml-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

      <Link href='/blog'>
        <a className='block text-center border bg-sub border-gray-500 text-gray-800 font-bold rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-main focus:outline-none focus:shadow-outline w-full '>
          All Posts
        </a>

      </Link>
      {/* MdKeyboardArrowRight */}
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  }
}
