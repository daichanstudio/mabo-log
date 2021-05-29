import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    // <header className='bg-gray-900 text-gray-100 shadow w-full'>
    <header className='bg-base text-main shadow w-full'>
      <div className='container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-0 md:mb-0'>
            <Image src='/images/posts/title-logo.png' width={130} height={40} alt='logo' />
            {/* <span className='ml-3 text-xl'>DevSpace</span> */}
            {/* <span className='ml-3 text-xl'>マボログ</span> */}
     
            <Link href='/blog'>
            <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              Blog
            </a>
          </Link>
          <Link href='/about'>
            <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              About
            </a>
          </Link>

          </a>
        </Link>
        {/* <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-main md:ml-auto'>
          <Link href='/blog'>
            <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              Blog
            </a>
          </Link>
          <Link href='/about'>
            <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              About
            </a>
          </Link>
        </nav> */}
      </div>
    </header>
  )
}
