import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

// <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
// <li className='p-4 cursor-pointer hover:bg-sub'>{category}</li>
// </Link>


export default function AboutPage() {
  return (
    <Layout title='About マボログ'>
      <h1 className='text-5xl border-b-4 pb-5'>About</h1>

      <div className='bg-base shadow-md rounded-lg px-10 py-6'>
        {/* <h3 className='text-2xl mb-5'>マボログとは</h3> */}

        <p className='ml-5'>旅やファッションを中心とした<br></br>ライフスタイルを面白おかしく伝える雑記帳</p>


< div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 flex justify-between items-center mr-5 ml-5  '>
        <div className='w-full  bg-base rounded-lg shadow-md mt-6  pr-5 pl-5 hover:bg-sub border border-gray-500 '>
        <Link href='/blog/category/lifestyle'>
            <a className=' cursor-pointer uppercase hover:bg-sub'>
            <p><b>LIFESTYLE</b></p>
        <Image src="/images/posts/pic12.jpg" alt="lifestyle" height={580} width={380} quality={90} className='rounded-lg'/>

        <p><b>シティーボーイの日常</b></p>
              
            </a>
          </Link>

        </div> 
   

    
       
        <div className='w-full  bg-base rounded-lg shadow-md mt-6 border  pr-5 pl-5 hover:bg-sub border border-gray-500 '>
          
        <Link href='/blog/category/fashion'>
        <a className=' cursor-pointer uppercase hover:bg-sub'>
        <p><b>FASHION</b></p>
        <Image src="/images/posts/pic14.jpg" alt="fashion" height={580} width={380} quality={90} className='rounded-lg items-center'/>
        <p><b>欲しいものが、いっぱいだ！</b></p>
        </a>
        </Link>
        </div> 

        <div className='w-full  bg-base rounded-lg shadow-md mt-6 border pr-5 pl-5 hover:bg-sub border border-gray-500 '>
        <Link href='/blog'>
        <a className=' cursor-pointer uppercase hover:bg-sub'>
        <p><b>TRIP</b></p>
        <Image src="/images/posts/pic13.jpg" alt="trip" height={580} width={380} quality={90} className='rounded-lg'/>
        <p><b>会いたくてたまらないから、旅に出た！</b></p>
        </a>
        </Link>
        </div> 



   
        </div>
      </div>
    </Layout>
  )
}
