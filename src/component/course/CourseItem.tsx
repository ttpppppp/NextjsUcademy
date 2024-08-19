import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IconEye, IconStar } from '../icons'
import IconClock from '../icons/IconClock'

const couseInfo = [
  {
    title : "1000",
    icon : (className ?: string) => <IconEye className= {className}></IconEye>
  },
  {
    title : "5.0",
    icon : (className ?: string) => <IconStar className= {className}></IconStar>
  },
  {
    title : "30h50p",
    icon : (className ?: string) => <IconClock className= {className}></IconClock>
  },
];
const CourseItem = () => {
  return (
    <div className='bg-white p-5 border border-gray-200 rounded-lg'>
      <Link href="#" className='block h-[180px] relative'>
        <Image
          src="https://images.unsplash.com/photo-1544639476-2b6d44ec3f53?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=''
          fill
          className='w-full h-full object-cover rounded-lg'
          priority
        />
        <span className='absolute px-3 py-1 rounded-lg bg-primary text-white top-3 right-3 text-xs'>New</span>
      </Link>
      <div className="py-4">
        <h3 className='font-bold text-lg mb-5'>Khóa học lập trình Js</h3>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-3">
            {
              couseInfo.map((item , index) => (
                <div className="flex items-center gap-2" key={index}>
                  {item.icon("size-4")}
                  <span>{item.title}</span>
                </div>
              ))
            }
          </div>
          <span className='text-primary font-semibold text-base'>500000đ</span>
        </div>
        <Link href="" className='w-full h-12 rounded-lg bg-primary text-white flex items-center justify-center mt-5 font-semibold'>
          Xem chi tiết
        </Link>
      </div>
    </div>
  )
}

export default CourseItem