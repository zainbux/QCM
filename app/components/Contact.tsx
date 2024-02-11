'use client'

import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { FaCalendarAlt, FaCar, FaClock, FaDollarSign, FaHandHoldingWater, FaHourglassEnd } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ContactProps {
  luxuryPrices: any[];
  premiumPrices: any[];
  basicPrices: any[];
}

export const Contact: React.FC<ContactProps> = ({ luxuryPrices, premiumPrices, basicPrices }) => {  const form = useRef<HTMLFormElement>(null);

  const [bookingDate, setBookingDate] = useState<string>('');
  const [bookingTime, setBookingTime] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [selectedCar, setSelectedCar] = useState<string>('');

  const handlePackageChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedPackage(event.target.value);
  };

  const handleSelectedCar = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCar(event.target.value);
  };

  const notify = (): void => {
    toast('Your quote has been successfully sent!');
  };
  
  const sendEmail = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
  
    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          'service_zpfwib4',
          'template_cj8mvnf',
          form.current,
          'sIjeS7W03SdzJSw0A'
        );
        console.log(result.text + ' EMAIL SENT');
        notify();
      } catch (error: any) {
        console.log(error.text);
        window.alert(
          'An error occurred while submitting your booking. Please try again later.'
        );
      }
    }
  };
  
  return (
    <div className='md:flex justify-center my-5 rounded-sm px-5 mx-auto overflow-hidden h-auto'>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />

      {/* Left div */}
      <div className='md:w-[90%] py-16 px-5 bg-primary text-center rounded-sm font-poppins font-medium'>

        <h1 className='text-3xl text-blue-100'>Detailing Plan</h1>

        <div className='grid grid-cols-2 md:flex gap-5 mt-10 text-sm'>

          <div className='h-40 bg-blue-100 rounded-sm'>
            <h1 className='mt-5'>CAR TYPE</h1>
            <FaCar size={30} className='mx-auto mt-2' />

            {/* Car Option */}
            <div className='relative inline-flex mt-5 px-5'>
              <select
                value={selectedCar}
                onChange={handleSelectedCar}
                className='w-[100px] md:w-[200px] text-xs md:text-base inline-block h-12 active:border active:bg-slate-300 text-center bg-primary uppercase align-middle transition-all rounded-sm cursor-pointer shadow-3xl text-white hover:bg-blue-100 hover:border hover:border-primary hover:text-primary'
              >
                <option>Car Type</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
          </div>

          <div className='border h-40 bg-blue-100 rounded-sm'>
            <h1 className='mt-5'>PACKAGE</h1>
            <FaHandHoldingWater size={30} className='mx-auto mt-2' />

            <div className='relative inline-flex mt-5 px-5'>
              <select
                value={selectedPackage}
                onChange={handlePackageChange}
                className='w-[100px] md:w-[200px] text-xs md:text-base inline-block h-12 active:border active:bg-slate-300 text-center bg-primary uppercase align-middle transition-all rounded-sm cursor-pointer shadow-3xl text-white hover:bg-blue-100 hover:border hover:border-primary hover:text-primary'
                required
              >
                <option>Package</option>
                <option>Basic</option>
                <option>Premium</option>
                <option>Luxury</option>
              </select>
            </div>
          </div>



          <div className='h-40 w-full bg-blue-100 rounded-sm'>
            <h1 className='mt-5 pt-4'>DURATION</h1>
            <FaHourglassEnd size={20} className='mx-auto mt-2' />
            <p className='text-4xl font-bold mt-2 pr-3'>
              {(() => {
                if (selectedPackage === 'Basic') {
                  return '~' + 90;
                } else if (selectedPackage === 'Premium') {
                  return '~' + 150;
                } else if (selectedPackage === 'Luxury') {
                  return '~' + 210;
                }
              })()}
            </p>
          </div>

          <div className='h-40 w-full bg-blue-100 rounded-sm'>
            <h1 className='mt-3 pt-4 text-lg'>Price</h1>
            <FaDollarSign size={20} className='mx-auto mt-2' />
            <p className='text-4xl font-bold mt-2'>
              {(() => {
                  if (selectedPackage === 'Basic') {
                    if (selectedCar === 'Small') {
                      return basicPrices.find((price) => price.selectedCar === 'Small').price;
                    } else if (selectedCar === 'Medium') {
                      return basicPrices.find((price) => price.selectedCar === 'Medium').price;
                    } else if (selectedCar === 'Large') {
                      return basicPrices.find((price) => price.selectedCar === 'Large').price;
                    }
                  } else if (selectedPackage === 'Premium') {
                    if (selectedCar === 'Small') {
                      return premiumPrices.find((price) => price.selectedCar === 'Small').price;
                    } else if (selectedCar === 'Medium') {
                      return premiumPrices.find((price) => price.selectedCar === 'Medium').price;
                    } else if (selectedCar === 'Large') {
                      return premiumPrices.find((price) => price.selectedCar === 'Large').price;
                    }
                  } else if (selectedPackage === 'Luxury') {
                    if (selectedCar === 'Small') {
                      return luxuryPrices.find((price) => price.selectedCar === 'Small').price;
                    } else if (selectedCar === 'Medium') {
                      return luxuryPrices.find((price) => price.selectedCar === 'Medium').price;
                    } else if (selectedCar === 'Large') {
                      return luxuryPrices.find((price) => price.selectedCar === 'Large').price;
                    }
                  }

                  return null;
              })()}
            </p>
          </div>
          
        </div>
      </div>

    </div>
  );
};
