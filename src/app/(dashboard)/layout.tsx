import Sidebar from '@/component/layout/Sidebar'
import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

const layout = ({children} : {children : React.ReactNode}) => {
  const {userId} = auth();
  return (
    <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)]">
    <aside className="sidebar">
      <Sidebar/>
    </aside>
    <main className=''>
      <div className="h-14 bg-white">
        <div className="p-2 flex items-center justify-between">
           <form action="" className='gap-4 h-10 px-5 w-[min(100%,390px)]'>
              <input type="text" placeholder='Tìm kiếm khóa học' className='p-2 w-full text-sm border border-gray-400 rounded-full'/>
           </form>
           {
            !userId ? <Link href= "/sign-in" className="login px-3 py-2 w-35 bg-primary rounded-lg text-white text-sm">
              Đăng nhập 
            </Link> : <UserButton />
           }
           
        </div>
      </div>
      <div className="p-5">
        {children}
      </div>
    </main>
  </div>
  )
}

export default layout