"use client"
import React, { useState } from 'react'
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex m-auto justify-between space-x-10 bg-yellow-300 text-white font-bold items-center '>
      <ul className='flex py-3 px-3'>
        <Link href='/'>
          <li className='text-3xl space-x-7 text-black'>VICDIME</li>
        </Link>
      </ul>
      <button onClick={toggleMenu} className='md:hidden text-xl content-end'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      </button>
      <ul className={`md:flex md:space-x-10 ${isMenuOpen ? 'block' : 'hidden'} md:mt-0 md:mb-0`}>
        <Link href='/Task'>
          <li><button className='text-black bg-amber-500'>Contact</button></li>
        </Link>
        <Link href='/Login'>
          <li><button className='text-black bg-amber-500'>Get STARTED</button></li>
        </Link>
      </ul>
    </nav>
  );
}

