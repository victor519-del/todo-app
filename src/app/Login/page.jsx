import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <section className='h-full gradient-form bg-[url(/unsplash2.jpg)] bg-cover  md:h-screen'>
    <div className='container py-12 px-6 h-full'>
      <div className=' flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
                <div className='md:p-12 md:mx-6'>
                 
                  <form>
                    <p className='mb-4 text-white'>
                      Please Login if you have an account
                    </p>
                    <div className='mb-4'>
                      <input
                        type='email'
                        className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                        placeholder='Your Email'
                        name='userEmail'/>
                    </div>
                    <div className='mb-4'>
                      <input
                        type='password'
                        className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                        placeholder='Password'
                        name='pin'/>
                    </div>
                    <div className='text-center pt-1 mb-12 pb-1'>
                     
                      <Link href='Dashboard' className='bg-green inline-block px-6 py-2.5 text-black font-medium text-xs  uppercase rounded hover:bg-blue-700 '>  
                       Login
                     </Link>
                    </div>
                    <div className='flex items-center justify-between pb-6'>
                      <p className='mb-0 mr-2 text-white'>If you don't have an account. Just Login?</p>
                      <Link href='Dashboard'  className='inline-block px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
                        SignUp
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
  </section>
  )
}
