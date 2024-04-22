"use client"

import React from 'react'
import { useUser } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavbarButton =  () => {
const {isLoaded, isSignedIn} = useUser()
const pathname = usePathname()

if (!isLoaded) return <p>please wait...</p>
    
  return isSignedIn ? (
  <div className='flex items-center gap-1 md:gap-4'>
    <Link className={`text-[10px] md:text-sm ${pathname === '/dashboard' ? 'btn btn-active' : 'btn'}`} href="/dashboard">Create Diary</Link>
    <Link className={`text-[10px] md:text-sm ${pathname === '/dashboard/my-diary' ? 'btn btn-active' : 'btn'}`} href="/dashboard/my-diary">My Diary</Link>
    <UserButton afterSignOutUrl="/" />
  </div>
) : (<Link href="/sign-in">Sign In</Link>)
}

export default NavbarButton