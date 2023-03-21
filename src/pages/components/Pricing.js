import React from 'react';
import PriceCard from './PriceCard';


const plans = [
  {
    name: 'Basic',
    price: 79,
    currency: '$',
    featured:false,
    features: [
      'Lorem ipsum dolor sit amet, consectetur',
      'Lorem ipsum dolor sit amet, consectetur',
      'Lorem ipsum dolor sit amet, consectetur'
    ]
  },
  {
    name: 'Premium',
    price: 119,
    currency: '$',
    featured:true,
    features: [
      'Lorem ipsum dolor sit amet, consectetur',
      'Lorem ipsum dolor sit amet, consectetur',
      'Lorem ipsum dolor sit amet, consectetur'
    ]
  },
  {
    name: 'Luxury',
    price: 149,
    currency: '$',
    featured:false,
    features: [
      'Lorem ipsum dolor sit amet, consectetur',
      'Lorem ipsum dolor sit amet, consectetur',
      'Lorem ipsum dolor sit amet, consectetur'
    ]
  }

]

const Pricing = () => {
  return (
    <div className='bg-primary items-center pb-6'>
    
      <div className='text-center py-8'>
        <h1 className='text-blue-100 text-5xl font-poppins font-semibold mt-14'>
          Pricing
        </h1>
      </div>

      <div className='justify-center md:flex gap-12 md:gap-0'>
        <div className='justify-center md:flex gap-12 md:gap-0'>
          {plans.map((plan, index) => (
            <PriceCard {...plan} key={index} featured={plan.featured} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Pricing;
