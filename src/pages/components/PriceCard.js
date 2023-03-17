import React from 'react'
import { CheckIcon  } from '@heroicons/react/20/solid'

const PriceCard = ({ name = '', price = 0,  currency ='$', features = [], featured = false }) => {
  return (

    <div className='h-full flex justify-center items-center py-12'>

        <div className={`bg-white border-secondary rounded-sm shadow-xl md:w-60 lg:w-80 relative ${
            featured ? 'border-2' : 'border border-opacity-10'
        }`}>
            
            {/* Most Popular */}
            {
                featured ? (
                <span className=' bg-secondary text-primary mx-7 rounded-full whitespace-nowrap uppercase items-center flex justify-center transform -translate-y-1/2'>Most Popular</span>   
                ) : null
            } 

            {/* Header */}
            <div className='px-6 py-12 border-gray-200 text-3xl font-poppins font-semibold text-center '>
                <p className='text-3xl font-semimbold text-center-4'>{name}</p>
                <div className='flex justify-center items-center'>
                    <p className='text-4xl font-medium'>{currency}</p>
                    <p className='text-7xl font-bold'>{price}</p>
                </div>
            </div>

            {/* Info */}
            <div className='p-10 bg-blue-50 font-semibold text-gray-600 rounded-sm'>
                <ul className='space-y-3 pr-5'>
                    {features.map((features, index) => (

                        <li key={index} className='flex items-center space-x-4'>
                        <CheckIcon className='w-6 h-6 text-green-500 flex-shrink-0'/>
                        <p>{features}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </div>
  )
}

export default PriceCard