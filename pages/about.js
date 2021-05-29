import Layout from '@/components/Layout'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <Layout title='About DevSpace'>
      <h1 className='text-5xl border-b-4 pb-5'>About</h1>

      <div className='bg-base shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl mb-5'>マボログとは</h3>

        <p className='mb-3'>旅やファッションを中心としたライフスタイルを面白おかしく伝える雑記帳</p>

        {/* <p>
          <span className='font-bold'>Version 1.0.0</span>
        </p> */}

      </div>
    </Layout>
  )
}
