import React, { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { FaCalendarAlt, FaCar, FaClock, FaHandHoldingWater } from 'react-icons/fa';
import { Listbox } from '@headlessui/react'



const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ]

  
export const Contact = () => {
  return (
    <div className='md:flex justify-center my-5 rounded-sm w-[95%] shadow-lg mx-auto overflow-hidden h-auto'>
        
        {/* Right div */}
        <div className='md:w-1/2 py-16 px-12 bg-primary text-center font-poppins font-medium'>
        <h1 className='text-3xl text-blue-100'>Detailing Plan</h1>

            <div className='grid grid-cols-2 gap-5 mt-10 text-sm'>

                <div className='h-40 bg-blue-100 rounded-md'>
                    <h1 className='mt-5'>CAR TYPE</h1>
                    <FaCar size={30} className='mx-auto mt-2'/>


                    

                </div>

                <div className='border h-40 bg-blue-100 rounded-md'>
                    <h1 className='mt-5'>PACKAGE</h1>
                    <FaHandHoldingWater size={30} className='mx-auto mt-2'/>

                </div>

                <div className='h-60 bg-blue-100 rounded-md'>
                    <h1 className='mt-5'>BOOKING DATE</h1>
                    <FaCalendarAlt size={30} className='mx-auto mt-2'/>
                    {/* HERE */}

                </div>

                <div className='h-60 bg-blue-100 rounded-md'>
                    <h1 className='mt-5'>BOOKING TIME</h1>
                    <FaClock size={30} className='mx-auto mt-2'/>

                </div>

            </div>

            <div className='h-40 w-full bg-blue-100 rounded-md'>
                <h1 className='mt-5 pt-4'>DURATION</h1>
                <FaCar size={30} className='mx-auto mt-2'/>

            </div>
                
        </div>

        {/* Left div */}
        <div className='md:w-1/2 py-16 px-12 bg-blue-100'>

            <h1 className='text-center text-3xl font-poppins font-medium'>Please input the required details</h1>
            
            <form action="#" >
                <div className='grid grid-cols-2 gap-5 mt-10'>
                    <input type="text" placeholder='First Name *' className='border border-secondary py-3 px-2 rounded-sm'></input>
                    <input type="text" placeholder='Last Name ' className='border border-secondary py-3 px-2 rounded-sm'></input>
                </div>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                    <input type="tel" placeholder='Phone Number *' className='border border-secondary py-3 px-2 rounded-sm'></input>
                    <input type="text" placeholder='Email ' className='border border-secondary py-3 px-2 rounded-sm'></input>
                </div>
                <div className='w-full gap-5 mt-5'>
                    <input type="text" placeholder='Car Make & Model *' className='border border-secondary py-3 px-2 w-full rounded-sm'></input>
                </div>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                    <input type="text" placeholder='Street Address *' className='border border-secondary py-3 px-2 rounded-sm'></input>
                    <input type="text" placeholder='Postal Code * ' className='border border-secondary py-3 px-2 rounded-sm'></input>
                </div>
                <div className='w-full gap-5 mt-5'>
                    <textarea type="text" placeholder='Additional Information' className='border border-secondary py-3 px-2 w-full rounded-sm h-40'></textarea>
                </div>
                <div className='mt-10 text-center'>
                    <button type="button" className=" inline-block h-12 w-36 active:border active:bg-slate-300 text-center bg-primary uppercase align-middle transition-all rounded-sm cursor-pointer shadow-3xl text-white  hover:bg-blue-100 hover:border hover:border-primary hover:text-primary">BOOK</button>
                </div>
            </form>

        </div>
    </div>

  )
}

export default Contact