'use client'

import Image from 'next/image'
import React from 'react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { NavigationMenuLink } from '@/components/ui/navigation-menu'



type Props = {}

const Services = (props: Props) => {
  return (
    <div className='bg-blue-100  pt-10'>

        <div className='text-center mx-auto w-[50%] py-10'>
            <h1 className='text-primary text-6xl font-poppins font-semibold mb-5 mx-auto'>
                Services
            </h1>
            <p className='mb-4 text-2xl md:text-2xl'>
                We offer three packages of detailing services for your convience, we are flexible and are always willing to do any custom detailing work as well. 
            </p>
        </div>

        <div className='pb-20 w-[90%] mx-auto'>
            <Tabs defaultValue="premium" className=" ">

                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="basic">Basic</TabsTrigger>
                    <TabsTrigger value="premium">Premium</TabsTrigger>
                    <TabsTrigger value="luxury">Luxury</TabsTrigger>
                </TabsList>
                
                <TabsContent value="basic">
                    <Card>

                        <CardHeader>
                            <CardTitle className='text-center md:mb-5'>Basic</CardTitle>
                        </CardHeader>

                        <CardContent className=" md:flex ">

                            <div className='md:h-[400px] h-[300px] my-10 md:my-auto md:w-[40%] lg:w-[30%] mx-auto relative'>
                                <Image
                                    alt=''
                                    fill={true}
                                    src={"/basic.jpg"}
                                    className='rounded-sm shadow-md object-cover'

                                />
                            </div>

                            <div className='mx-auto my-auto md:w-[50%] lg:w-[45%]'>
                                <ul className='space-y-3'>
                                    <li className='bg-primary text-slate-200 flex p-5  w-full rounded-sm items-center'>Our Basic Package includes a meticulous exterior hand wash and thorough drying, ensuring your vehicle shines with a pristine cleanliness that lasts. </li>
                                    <li className='bg-primary text-slate-200 flex p-5  w-full rounded-sm items-center'>Elevate the look of your wheels with our wheel and rim cleaning and shine service, designed to eliminate brake dust and grime while leaving behind a brilliant, attention-grabbing shine.</li>
                                    <li className='bg-primary text-slate-200 flex p-5  w-full rounded-sm items-center'>Experience crystal-clear clarity with our window clean and shine treatment, providing a streak-free, polished finish that enhances both the aesthetics and visibility of your vehicle.</li>

                                </ul>
                            </div>

                        </CardContent>


                    </Card>
                </TabsContent>

                <TabsContent value="premium">
                    <Card>
                    <CardHeader >
                        <CardTitle className='text-center md:mb-5'>Premium</CardTitle>
                    </CardHeader>
                    <CardContent className=" md:flex ">

                        <div className='md:h-[400px] h-[300px] my-10 md:my-auto md:w-[40%] lg:w-[30%] mx-auto relative'>
                            <Image
                                    alt=''
                                    fill={true}
                                    src={"/premium.jpg"}
                                    className='rounded-sm shadow-sm object-cover'
                                />
                        </div>

                        <div className='mx-auto my-auto md:w-[50%] lg:w-[45%]'>
                            <ul className='space-y-3 '>
                                <li className='bg-primary text-slate-200 flex p-5  w-full rounded-sm items-center'>Upgrade to our Premium Package, which includes everything in the Basic Package with a professional car waxing service, leaving your vehicle with a long-lasting, protective sheen that enhances its overall appeal.</li>
                                <li className='bg-primary text-slate-200 flex p-5  w-full rounded-sm items-center'>A thorough interior rejuvenation as part of our Premium Package, featuring carpet, seat, and floor mat shampooing, along with meticulous cleaning of the dash, center console, and detailed door panels for a truly refreshed and inviting interior.</li>
                                <li className='bg-primary text-slate-200 flex p-5  w-full rounded-sm items-center'>Our Premium Package goes beyond the basics by offering a full interior vacuum and steam cleaning, ensuring a deep and comprehensive cleanse that reaches into every nook and cranny.</li>

                            </ul>
                        </div>
                    </CardContent>

                    </Card>
                </TabsContent>

                <TabsContent value="luxury">
                    <Card>

                    <CardHeader>
                        <CardTitle className='text-center md:mb-5'>Luxury</CardTitle>
                    </CardHeader>

                    <CardContent className=" md:flex ">

                        <div className='md:h-[400px] h-[300px] my-10 md:my-auto md:w-[40%] lg:w-[30%] mx-auto relative'>
                            <Image
                                alt=''
                                fill={true}
                                src={"/luxury.png"}
                                className='rounded-sm shadow-sm object-cover'

                            />
                        </div>

                        <div className='mx-auto my-auto md:w-[50%] lg:w-[45%]'>
                            <ul className='space-y-3'>
                                <li className='bg-primary text-slate-200 flex p-5  w-full rounded-sm items-center'>Elevate your car care experience to the pinnacle with our Luxury Package, encompassing everything from the Premium Package and introducing a meticulous deep engine cleaning, ensuring your vehicle not only looks spectacular but also performs at its optimal best.</li>
                                <li className='bg-primary text-slate-200 flex p-5  w-full rounded-sm items-center'>Get the ultimate protection for your windows with our window ceramic coating, an exclusive addition to our Luxury Package that not only enhances clarity but also provides a durable shield against the elements, keeping your vehicle windows crystal clear in any weather.</li>
                                <li className='bg-primary text-slate-200 flex p-5  w-full rounded-sm items-center'>Our Luxury Package concludes with a comprehensive vehicle underside and exhaust tip cleaning, delivering a finishing touch that ensures every inch of your car, inside and out, reflects the highest standard of cleanliness and attention to detail.</li>

                            </ul>
                        </div>

                    </CardContent>

                    </Card>
                </TabsContent>

            </Tabs>            
        </div>
    </div>
  )
}

export default Services