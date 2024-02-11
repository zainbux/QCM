
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Pricing from './components/Pricing';
import { Contact} from './components/Contact';
import Footer from './components/Footer';

import { getDetails, getImages } from "@/sanity/sanity-utils";
import Gallery from './components/Gallery';
import Services from './components/Services';
import PriceCard from './components/PriceCard';

export default async function Home() {

  const details = await getDetails();
  const images = await getImages();

  const basicPrices = details
    .filter((detail: any) => detail.selectedPackage === 'Basic')

  const premiumPrices = details
    .filter((detail: any) => detail.selectedPackage === 'Premium')

  const luxuryPrices = details
    .filter((detail: any) => detail.selectedPackage === 'Luxury')

  const carouselimg = images.map((imageData: { image: string }) => imageData.image);
  

  return (
    <main className=''>
      
        <section id="home" className='relative grow bg-primary bg-cover bg-center' style={{backgroundImage: "url('/herobg.jpg')"}} >
          <Nav/>
          <Hero />   
        </section>
     
        <section id="about" className=''>
          <About/>
        </section>

        <section id="photos" className='bg-primary px-10 py-8'>
          <h1 className='text-6xl font-semibold text-center py-16 p-6 text-blue-100'>Our Work</h1>
            <Gallery images={carouselimg}/>
          <br className='text-white'></br>
        </section>

        <section id="services" className=''>
          <Services/>
        </section>

        <section id="pricing">
          <Pricing/>
        </section>

        <section id="Quote" className='pt-8'>
          <div className='md:px-20 px-5 py-8'>

            <h1 className='text-6xl font-semibold text-center p-6 px-5'>Get your Quote</h1>
            <p className='text-xl text-center md:text-2xl pb-5'>Get your detailing plan quote by selecting your package and vehicle, prices may vary depending on extra services and extra add-ons</p>
          </div>

          <Contact luxuryPrices={luxuryPrices} premiumPrices={premiumPrices} basicPrices={basicPrices} />
        </section>

        <section id="booking" className='pt-8'>
          <h1 className='text-6xl font-semibold text-center mt-10 p-6 '>Booking</h1>
          <p className='px-10 text-xl text-center md:text-2xl pb-10'>please select an available time slot and fill in the required details</p>
          <div className='md:px-10'>
            {/* <!-- Google Calendar Appointment Scheduling begin --> */}
            <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2GkWCwGuFlKQKxTiehEn-7SsQmtZ9J0fqZiOXQ-NA7Ey_DYy2ShaX1RTTn6FvpYDdxbX-Ykei5?gv=true"  width="100%" height="600" ></iframe>
            {/* <!-- end Google Calendar Appointment Scheduling --> */}          
          </div>
        </section> 

        <section className='pt-8 mx-auto'>
          <Footer/>
        </section>

    </main>
  )

}
