import { menuItem } from '@/constant'
import React from 'react'
import ActiveLink from '../common/ActiveLink'
import { TMenuItem } from '@/types'

const Sidebar = () => {
  return (
    <div className='p-5 border-r border-r-gray-200 h-screen bg-white'>
        <a  href = "/" className="logo text-3xl font-bold inline-block mb-4 text-primary">Ucademy</a>
        <ul className='flex flex-col gap-3'>
          {
            menuItem.map((item , index) => (
              <MenuItem key={index} url={item.url} title = {item.title} icon = {item.icon} />
            ))
          }
        </ul>
    </div>
  )
}
function MenuItem({url = "/" , title , icon} : TMenuItem){
  return <li>
    <ActiveLink url = {url}>
      {icon}
      {title}
    </ActiveLink>
  </li>
}

export default Sidebar