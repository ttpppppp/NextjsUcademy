"use client"
import { TActiveLinkProps } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const ActiveLink = ({ url, children }: TActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = url === pathname;
  
  return (
    <Link href={url} scroll={false} 
    className={`p-3 flex items-center gap-2 rounded-lg cursor-pointer 
    ${isActive ? 'text-white bg-primary' : 'hover:text-primary hover:bg-primary hover:bg-opacity-10'}`}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
