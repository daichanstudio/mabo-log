import Link from 'next/link'
import Image from 'next/image'
import CategoryLabel from './CategoryLabel'

export default function Post({ post, compact }) {
  return (
    // <div className='w-full px-10 py-6 bg-base rounded-lg shadow-md mt-6 border border-gray-500'>
    <div className='w-full  bg-base rounded-lg shadow-md mt-6 border border-gray-500 '>
      {!compact && (
        <Image
          src={post.frontmatter.cover_image}
          alt=''
          height={420}
          width={600}
          className='mb-4 rounded'
        />
      )}
      <div className='flex justify-between items-center mr-5 ml-5'>
        <span className='font-light text-gray-600'>
          {post.frontmatter.date}
        </span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>

      <div className='mt-2 mr-5 ml-5'>
        <Link href={`/blog/${post.slug}`}>
          <a className='text-2xl text-gray-700 font-bold hover:text-main hover:underline'>
          {/* <a className='text-2xl text-gray-700 font-bold hover:underline'> */}
            {post.frontmatter.title}
          </a>
        </Link>

        <p className='mt-2 text-gray-600'>{post.frontmatter.excerpt}</p>
      </div>

      {!compact && (
        <div className='flex justify-between items-center mr-5 ml-5'>
          <Link href={`/blog/${post.slug}`}>
            <a className='block text-center border border-gray-500 text-gray-800 font-bold rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-main focus:outline-none focus:shadow-outline w-full'>Read More</a>
          </Link>
          <div className='flex items-center'>
            {/* <img
              src={post.frontmatter.author_image}
              alt=''
              className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
            /> */}
            {/* <h3 className='text-gray-700 font-bold'>
              {post.frontmatter.author}
            </h3> */}
          </div>
        </div>
      )}
    </div>
  )
}
