"use client"
import Link from 'next/link'
// import React from 'react'
import Image from 'next/image'
import React, { useState } from 'react';


export default function page() {

  return (
    <>
    <section className='flex h-full'>
    <h1 className='w-1/2 mt-5 text-3xl font-bold mx-7'>VIC <span className='text-blue-950'>DIME</span>
    <div className='mt-20'>FREE ONLINE TASK MANAGER <br />
     Organize and manage your team like a boss with VIC <span className='text-blue-950'>DIME</span>, a free task management tool <br /> packing more 
     capabilities than you can imagine. <br />
     <Link href='Login'><button className='mt-5 text-2xl text-white bg-blue-950 border-black border-2 py-3 px-10 rounded-e-3xl'>GET STARTED</button></Link>
     </div>
     </h1>
     <div className=''>
       <img src="/home.jpg" alt="home" />
     </div>
     </section>

    
      <article className='text-center font-bold text-3xl mt-12'>WHY VIC <span className='text-blue-950'>DIME</span>?</article>
   
    <section className='flex container bg-gradient-radial h-full'>
      <div className='w-1/2 '>
      <img src="https://www.bitrix24.com/upload/optimizer/converted/images/content_en/product/tasks_and_projects/free_online_task_manager/img_why.png.webp?1663231360000" alt="My Image" width='800px' height='150px'  />
        
      </div>
      <div className='text-2xl font-normal mt-32 mx-7'>
       When it comes down to choosing task manager freeware, <br /> all you need is three things:
         <ul className='text-blue-950 list-disc' >
          <li>FREE(thats right, in capitals)</li>
          <li>Ease of use</li>
          <li>Versatility</li>
        </ul> 
        <div className='font-normal'>Coincidentally, thats exactly what you get from <span className='font-bold'>VIC</span> <span className='font-bold text-blue-950'>DIME</span> <br />
             - a free online task management app  thats easy to use <br /> and features dozens of collaboration  tools 
       </div>
       <Link href='Login'><button className='mt-5 text-2xl text-center text-white bg-blue-950 border-black border-2 py-3 px-10  rounded-e-3xl'>GET STARTED</button></Link> 
      </div>
    </section>

    <section className='flex h-full mt-32'>
     <div className='w-1/2'>
      <img src="/sign in.jpg" alt="home" width='800px' height='130px'/>
      </div>
      <article>
        <h2 className='text-4xl mx-6 text-blue-950'>IT'S FREE </h2>
        <div className='text-2xl font-normal mt-8'>To get started with <span className='font-bold'>VIC</span> <span className='font-bold text-blue-950'>DIME</span>, all you have to do is sign up <br />using your email  and... that’s it! 
        Once you’ve signed up <br /> for
        our free plan, you get access <br /> to all of the basic tools in <span className='font-bold'>VIC</span> <span className='font-bold text-blue-950'>DIME</span> FOREVER.</div>
       <ol className='list-disc text-blue-950 text-3xl mt-10 ml-7'>
        <li>No credit card required</li>
        <li>Unlimited users</li>
        <li>Free forever</li>
       </ol>
       <Link href='Login'><button className='mt-5 text-2xl text-white bg-blue-950 border-black border-2 py-3 px-10 rounded-e-3xl'>GET STARTED</button></Link>
      </article>
    </section>

    <div className='flex h-full mt-32'>
      <article className='w-1/2'>
        <h3 className='text-4xl mx-6 text-blue-950'>IT’S EASY TO USE</h3>
        <div className='text-3xl font-normal mt-12 '> <span className='font-bold'>VIC</span> <span className='font-bold text-blue-950'>DIME</span> is as easy as it gets - you just go ahead and invite
         your team members, set up a project or workgroup, and start assigning tasks.</div>
         <ul className='list-disc text-blue-950 text-3xl mt-10 ml-11'>
          <li>Get started in less than 30 minutes</li>
          <li>Detailed FAQ and onboarding</li>
          <li>Migrate your data in one click</li>
         </ul>
         <Link href='Login'><button className='mt-5 text-2xl text-white bg-blue-950 border-black border-2  py-3 px-10 rounded-e-3xl'>GET STARTED</button></Link>
      </article>
      <div><img src="/down3.jpg" alt="home" width='700px' height='130px' /></div>
    </div>

    
    </>

  )

      }
      // width='800px' height='130px'