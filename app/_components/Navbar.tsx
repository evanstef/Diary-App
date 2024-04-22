import Link from "next/link";
import React from "react";
import NavbarButton from "./NavbarButton";




const Navbar = () => {
  return (
    <div className="navbar bg-slate-800 mb-7">
        <div className="container mx-auto flex justify-between p-4">
          <Link href="/" className="btn text-xl">Open Diary</Link>
          <NavbarButton />  
        </div>   
    </div>
  )
}

export default Navbar