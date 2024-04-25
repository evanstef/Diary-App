"use client"

import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavbarButton =  () => {
const [showMenu, setShowMenu] = useState(false)
const {isLoaded, isSignedIn} = useUser()
const pathname = usePathname()

useEffect(() => {
  const handleScroll = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  // Menambahkan event listener untuk scroll
  window.addEventListener('scroll', handleScroll);

  // Membersihkan event listener saat komponen tidak lagi digunakan
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [showMenu]);

function handleClick () {
  setShowMenu(!showMenu)
}


if (!isLoaded) return <p>please wait...</p>
    
  return isSignedIn ? (
  <>
  <div onClick={() => handleClick()} className={`flex flex-col z-20 md:hidden gap-2 items-center`}>
    <span className={`bg-slate-200 w-7 h-1 duration-300 rounded-lg ease-in-out ${showMenu ? 'rotate-45 origin-top-left translate-y-[1px]' : ''}`}></span>
    <span className={`bg-slate-200 w-7 h-1 rounded-lg duration-300 ease-in-out ${showMenu ? 'scale-0' : ''}`}></span>
    <span className={`bg-slate-200 w-7 h-1 rounded-lg duration-300 ease-in-out ${showMenu ? '-rotate-45 origin-bottom-left -translate-y-1' : ''}`}></span>
  </div>
  <div className={`${showMenu ? 'flex gap-5 z-10 items-center bg-slate-800 p-5 pt-24 flex-col fixed top-0 rounded-lg right-0' : 'hidden'} md:flex md:items-center gap-1 md:gap-4`}>
    <Link className={`text-[10px] md:text-sm ${pathname === '/dashboard' ? 'btn btn-active' : 'btn'}`} href="/dashboard">Create Diary</Link>
    <Link className={`text-[10px] md:text-sm ${pathname === '/dashboard/my-diary' ? 'btn btn-active' : 'btn'}`} href="/dashboard/my-diary">My Diary</Link>
    <Link className={`text-[10px] md:text-sm ${pathname === '/dashboard/my-comment' ? 'btn btn-active' : 'btn'}`} href="/dashboard/my-comment">My Comment</Link>
    <UserButton afterSignOutUrl="/" />
  </div>
  </>
  
) : (<Link href="/sign-in">Sign In</Link>)
}

export default NavbarButton