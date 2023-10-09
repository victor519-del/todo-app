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
      <p> <Link href='Login'><button className='hover:border-sky-300 border-solid border-4 text-3xl text-black my-2 font-extrabold'>Get STARTED</button></Link></p>
    </div>

    <div className="grid grid-cols-3 gap-4 h-[600px] my-5">
  <div className="bg-blue-200 p-4 hover:bg-red-900 transition-shadow delay-1000 ">
    <section>
    Tasks are specific activities or assignments aimed at achieving particular goals, ranging from simple to complex, and can be individual or collaborative efforts.
In academic settings, tasks are assignments, projects, or exams that challenge students to demonstrate their understanding and critical thinking skills.
 <button className='font-bold'>Get Started</button>
    </section>
  </div>
  <div className="bg-green-200 p-4 hover:bg-lime-700 blur-4 delay-1000">
    <div className='font-extrabold text-2xl text-center'>Order ur Task </div>
    <section className='font-bold'>Prioritizing tasks based on their importance is crucial for effective time management and goal achievement. 
      Here's a step-by-step approach to prioritize tasks based on their importance
      <ol>
        <li>Brainstorm and List All Tasks.</li>
        <li>Identify Urgent and Important Tasks.</li>
        <li>Use the Eisenhower Matrix</li>
        <li>Assign Priority Levels</li>
        <li>Consider Deadlines</li>
      </ol>
      </section>
  </div>
  <div className="bg-yellow-200 p-4 font-extrabold">
    <section>Goal setting is the process of defining specific, measurable, achievable, relevant, an
      d time-bound objectives that an individual, group, or organization aims to achieve.A task manager app is a
       software application designed to help users organize, track, prioritize, and manage their tasks and activities. 
       These apps are commonly used to improve productivity, time management, and overall organization by providing
        a centralized platform for capturing, planning, 
      and monitoring tasks. The primary functions of a task manager app include:
      <li>Task Creation and Input</li>
      <li>Task Organization</li>
      <li>Task Prioritization</li>
      <li>Deadline and Reminders</li>
      <li>Task Tracking and Progress</li>
      <button className='items-center bg-green-300'>Order ur TASK</button>
      </section>
  </div>
</div>
<section className=''>

</section>

   <div className="background-video ">
      <video autoPlay loop muted className="object-cover">
         <div className='text-black'>Get Started</div>
        <source src="/background.mp4" type="video/mp4" />
      </video>
      </div>
    <div className='flex h-[90px] justify-center text-3xl mx-80 mt-10 gap-5'>
      <Link href='https://www.google.com'><FcGoogle/></Link>
      <Link href='https://www.instagram.com'><BsInstagram/></Link>
      <Link href='https://www.gmail.com'><BiLogoGmail/></Link>

    </div>
    </>
  )
}