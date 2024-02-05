
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Pricing from './components/Pricing';
import { Contact} from './components/Contact';
import Footer from './components/Footer';

import { getDetails, getImages } from "@/sanity/sanity-utils";
import Gallery from './components/Gallery';

export default async function Home() {

  const details = await getDetails();
  const images = await getImages();

  console.log("images:", images);
  console.log("Details:", details);

  const basicPrices = details
    .filter((detail: any) => detail.selectedPackage === 'Basic')

  const premiumPrices = details
    .filter((detail: any) => detail.selectedPackage === 'Premium')

  const luxuryPrices = details
    .filter((detail: any) => detail.selectedPackage === 'Luxury')

  console.log("Basic Prices:", basicPrices);
  console.log("Premium Prices:", premiumPrices);
  console.log("Luxury Prices:", luxuryPrices);

  const carouselimg = images.map((imageData: { image: string }) => imageData.image);
  

  return (
    <main className=''>
      
        <section id="home" className='relative grow bg-primary bg-cover bg-center px-20' style={{backgroundImage: "url('/herobg.jpg')"}} >
          <Nav/>
          <Hero />   
        </section>
     
        <section id="about" className=''>
          <About/>
        </section>

        <section id="photos" className='bg-primary px-10'>
          <h1 className='text-6xl font-semibold text-center py-16 p-6 text-blue-100'>Our Work</h1>
            <Gallery images={carouselimg}/>
          <br className='text-white'></br>
        </section>

        <section id="pricing">
          <Pricing/>
        </section>

        {/* <section id="contact">
          <h1 className='text-6xl font-semibold text-center p-6'>Booking</h1>
          <p className='p-5 text-2xl text-center md:text-3xl pb-5'>Please fill in both forms correctly to get your Quote as soon as possible</p>
          <Contact luxuryPrices={luxuryPrices} premiumPrices={premiumPrices} basicPrices={basicPrices} />
        </section> */}

        <section>
        <h1 className='text-6xl font-semibold text-center mt-5 p-6'>Booking</h1>
        <div className='px-10'>
          {/* <!-- Google Calendar Appointment Scheduling begin --> */}
          <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2GkWCwGuFlKQKxTiehEn-7SsQmtZ9J0fqZiOXQ-NA7Ey_DYy2ShaX1RTTn6FvpYDdxbX-Ykei5?gv=true"  width="100%" height="600" ></iframe>
          {/* <!-- end Google Calendar Appointment Scheduling --> */}          
        </div>
        </section> 

        <section>
          <Footer/>
        </section>

    </main>
  )

}
