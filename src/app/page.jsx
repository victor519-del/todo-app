import Link from 'next/link'
import React from 'react'
import Navbar from './components/Navbar'
import {FcGoogle} from 'react-icons/fc'
import {BsInstagram} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'


export default function page() {
  return (
    <>
    <Navbar/>  
    <div className='text-center m-auto my-52'>
      <h1 className='text-7xl  font-extrabold'>Organize your work <br></br> and life, finally.</h1>
      <span className='text-2xl'>Become focused, organized, and calm with VICDIME. The world's #1 <br></br> task manager and to-do list app</span>
      <p> <Link href='Login'><button className='bg-amber-500 text-3xl text-black my-2 font-extrabold'>Get STARTED</button></Link></p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto my-5 md:grid-rows">
  <div class="bg-blue-200 p-4 hover:bg-red-900 transition-shadow delay-1000 md:grid-rows-1">
    <section>
      Tasks are specific activities or assignments aimed at achieving particular goals, ranging from simple to complex, and can be individual or collaborative efforts.
      In academic settings, tasks are assignments, projects, or exams that challenge students to demonstrate their understanding and critical thinking skills.
      <button class="font-bold">Get Started</button>
    </section>
  </div>
  <div class="bg-green-200 p-4 hover:bg-lime-700 blur-4 delay-1000 md:grid-rows">
    <div class="font-extrabold text-2xl text-center">Order your Task</div>
  </div>
  <div class="bg-yellow-200 p-4 font-extrabold"></div>
</div>

<section className=''>

</section>

    <div className='flex h-[90px] justify-center text-3xl mx-80 mt-10 gap-5'>
  <Link href='https://www.google.com'><FcGoogle/></Link>
  <Link href='https://www.instagram.com'><BsInstagram/></Link>
  <Link href='https://www.gmail.com'><BiLogoGmail/></Link>
</div>

    </>
  )
}

