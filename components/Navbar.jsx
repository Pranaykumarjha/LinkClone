"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const Navbar = () => {
    const pathname = usePathname();
    const showNavbar = ["/", "/generate"].includes(pathname);
    return (
        <>{showNavbar &&
            <nav className='bg-white w-[80vw] z-50 fixed top-8 left-1/2 -translate-x-1/2 shadow-md rounded-full p-7 flex justify-between items-center'>
                <div className="logo flex gap-20  items-center">
                    <Link href={"/generate"}> <img className='h-8' loading="eager" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" ></img></Link>
                    <ul className='flex gap-10'>
                        <Link href={"/"}><li>Product</li></Link>
                        <Link href={"/"}><li>Template</li></Link>
                        <Link href={"/"}><li>Marketplace</li></Link>
                        <Link href={"/generate"}><li>Learn</li></Link>
                        <Link href={"/"}><li>Pricing</li></Link>
                    </ul>
                </div>
                <div className='flex gap-4'>
                    <button className='login px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] border border-[#00f0ff]/50 shadow-[0_0_10px_#00f0ff80] hover:shadow-[0_0_25px_#00f0ff] hover:border-[#00f0ff] hover:scale-105 transition-all duration-300'>
                        Log In
                    </button>
                    <button className='signup px-6 py-2 rounded-full text-black font-semibold bg-gradient-to-r from-[#00f0ff] to-[#00ffa3] hover:shadow-[0_0_25px_#00ffa3] hover:scale-105 transition-all duration-300'>
                        Sign-Up Free
                    </button>
                </div>
            </nav>
        }
        </>
        )
}

export default Navbar
