import React from 'react'
import PriceCard from './PriceCard'

const Pricing = ({ plans }) => {
  return (
    <div className='bg-primary items-center pb-6'>
    
      <div className='text-center py-8'>
        <h1 className='text-blue-100 text-5xl font-poppins font-semibold mt-14'>
          Pricing
        </h1>
      </div>

      <div className='justify-center md:flex gap-12 md:gap-0'>
          {
          plans.map(plan =>(
            
            <div className={`justify-center md:flex gap-12 md:gap-0 ${ plans.featured ? " order-first md:order-none md:scale-110 md:z-10" : " "}`}>
              <PriceCard {...plan} key={plan.name} /> 
            </div>

          ))
          }
      </div>

    </div>
  )
}

export default Pricing