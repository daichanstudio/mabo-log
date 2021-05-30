import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (

    <footer className='bg-sub2 text-white shadow w-full'>
      <div className='container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center'>

            <Link href='/blog'>
            <a className='mx-5 cursor-pointer uppercase hover:bg-sub hover:text-black'>
              Blog
            </a>
          </Link>
          <Link href='/about'>
            <a className='mx-5 cursor-pointer uppercase hover:bg-sub hover:text-black'>
              About
            </a>
          </Link>
          <p>©{new Date().getFullYear()} マボログ</p>


      </div>
    </footer>
  )
}