import React, { useState, useRef } from 'react';
import { FaCalendarAlt, FaCar, FaClock, FaDollarSign, FaHandHoldingWater, FaHourglassEnd } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Contact = () => {

  const form = useRef();

  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedCar, setSelectedCar] = useState('');

  function handlePackageChange(event) {
    setSelectedPackage(event.target.value);
  }

  function handleSelectedCar(event) {
    setSelectedCar(event.target.value);
  }

// emailjs code
const notify = () => toast("Your quote has been successfully sent!");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_zpfwib4',
        'template_cj8mvnf',
        form.current,
        'sIjeS7W03SdzJSw0A'
      )
      .then(
        (result) => {
          console.log(result.text + " EMAIL SENT");
          notify();
        },
        (error) => {
          console.log(error.text);
          window.alert('An error occurred while submitting your booking. Please try again later.');
        }
      );
  };

  return (
    
    <div className='md:flex justify-center my-5 rounded-sm w-[95%] shadow-lg mx-auto overflow-hidden h-auto'>
    <ToastContainer  
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
      {/* Left div */}
      <div className='md:w-1/2 py-16 px-12 bg-primary text-center font-poppins font-medium'>
        <h1 className='text-3xl text-blue-100'>Detailing Plan</h1>

        <div className='grid grid-cols-2 gap-5 mt-10 text-sm'>
          <div className='h-40 bg-blue-100 rounded-sm'>
            <h1 className='mt-5'>CAR TYPE</h1>
            <FaCar size={30} className='mx-auto mt-2' />

            {/* Car Option */}
            <div className='relative inline-flex mt-5'>
              <select value={selectedCar} onChange={handleSelectedCar} className=' w-[100px] md:w-[200px] text-xs md:text-base inline-block h-12  active:border active:bg-slate-300 text-center bg-primary uppercase align-middle transition-all rounded-sm cursor-pointer shadow-3xl text-white  hover:bg-blue-100 hover:border hover:border-primary hover:text-primary'>
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

            <div className='relative inline-flex mt-5'>
              <select value={selectedPackage} onChange={handlePackageChange} className='w-[100px] md:w-[200px] text-xs md:text-base p- inline-block h-12 active:border active:bg-slate-300 text-center bg-primary uppercase align-middle transition-all rounded-sm cursor-pointer shadow-3xl text-white  hover:bg-blue-100 hover:border hover:border-primary hover:text-primary'>
                <option required >Package</option>
                <option>Basic</option>
                <option>Premium</option>
                <option>Luxury</option>
              </select>
            </div>
          </div>

          <div className='h-60 bg-blue-100 rounded-sm'>
            <h1 className='mt-5'>BOOKING DATE</h1>
            <FaCalendarAlt size={30} className='mx-auto mt-2'/>

            {/* BOOKING DATE */}
                <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="border border-primary py-3 px-2 rounded-sm mt-6 text-primary text-center w-[100px] md:w-[200px] text-xs md:text-base"
                />


          </div>
            <div className='h-60 bg-blue-100 rounded-sm'>
                <h1 className='mt-5'>BOOKING TIME</h1>
                <FaClock size={30} className='mx-auto mt-2'/>

                <input
                    
                    type="time"
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="border border-primary py-3 px-2 rounded-sm mt-6 text-primary text-center w-[100px] md:w-[200px] text-xs md:text-base"
                />
            </div>

            <div className='h-40 w-full bg-blue-100 rounded-sm'>
                    <h1 className='mt-5 pt-4'>DURATION</h1>
                    <FaHourglassEnd size={20} className='mx-auto mt-2'/>
                    <p className='text-4xl font-bold mt-2 pr-3'>
                        {(() => {
                            if (selectedPackage === 'Basic') {
                            return "~" + 90;
                            } else if (selectedPackage === 'Premium') {
                            return "~" + 150;
                            } else if (selectedPackage === 'Luxury') {
                            return "~" + 210;
                            }
                        })()}
                    </p>
                </div>

                <div className='h-40 w-full bg-blue-100 rounded-sm'>
                  <h1 className='mt-3 pt-4 text-lg'>Price</h1>
                  <FaDollarSign size={20} className='mx-auto mt-2'/>
                  <p className='text-4xl font-bold mt-2'>
                    {(() => {
                      if (selectedPackage === 'Basic') {
                        if (selectedCar === 'Small') {
                          return 60;
                        } else if (selectedCar === 'Medium') {
                          return 90;
                        } else if (selectedCar === 'Large') {
                          return 110;
                        }
                      } else if (selectedPackage === 'Premium') {
                        if (selectedCar === 'Small') {
                          return 150;
                        } else if (selectedCar === 'Medium') {
                          return 200;
                        } else if (selectedCar === 'Large') {
                          return 250;
                        }
                      } else if (selectedPackage === 'Luxury') {
                        if (selectedCar === 'Small') {
                          return 200;
                        } else if (selectedCar === 'Medium') {
                          return 250;
                        } else if (selectedCar === 'Large') {
                          return 300;
                        }
                      }
                    })()}
                  </p>
                </div>


        </div>

          </div>

        {/* Right div */}
        <div className='md:w-1/2 py-16 px-12 bg-blue-100'>

            <h1 className='text-center text-3xl font-poppins font-medium'>Please input the required details</h1>
            
            <form ref={form} onSubmit={sendEmail} >
                <div className='grid grid-cols-2 gap-5 mt-10'>
                    <input type="text" placeholder='First Name *' name="first_name" required className='border border-secondary py-3 px-2 rounded-sm'></input>
                    <input type="text" placeholder='Last Name ' name="last_name" className='border border-secondary py-3 px-2 rounded-sm'></input>
                </div>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                    <input type="tel" placeholder='Phone Number *' name="phone_number" required className='border border-secondary py-3 px-2 rounded-sm'></input>
                    <input type="text" placeholder='Email ' name="email" className='border border-secondary py-3 px-2 rounded-sm'></input>
                </div>
                <div className='w-full gap-5 mt-5'>
                    <input type="text" placeholder='Car Make & Model *' name="car_info" required className='border border-secondary py-3 px-2 w-full rounded-sm'></input>
                </div>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                    <input type="text" placeholder='Street Address *' name="Address" required className='border border-secondary py-3 px-2 rounded-sm'></input>
                    <input type="text" placeholder='Postal Code * ' name="postal_code" required className='border border-secondary py-3 px-2 rounded-sm'></input>
                </div>
                <div className='w-full gap-5 mt-5'>
                    <textarea type="text" placeholder='Additional Information' name="additional_info" className='border border-secondary py-3 px-2 w-full rounded-sm h-40'></textarea>
                </div>

                <input type="hidden" name="car-type" value={selectedCar} />
                <input type="hidden" name="package" value={selectedPackage} />
                <input type="hidden" name="time" value={bookingTime} />
                <input type="hidden" name="date" value={bookingDate} />



                <div className='mt-10 text-center'>
                    <button type="submit" value="Send" className="hover:scale-110 duration-200 ease-out inline-block h-16 w-40 text-2xl active:border active:bg-slate-300 text-center bg-primary uppercase align-middle transition-all rounded-sm cursor-pointer shadow-3xl text-white  hover:bg-blue-100 hover:border hover:border-primary hover:text-primary">BOOK</button>                     
                </div>

                
            </form>

        </div>
    </div>

  )
}

export default Contact
