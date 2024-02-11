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


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"



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
                                    alt="Image"
                                    fill={true}
                                    src={"/basic.jpg"}
                                    className='rounded-sm shadow-md object-cover'

                                />
                            </div>

                            <div className='mx-auto my-auto md:w-[50%] lg:w-[45%]'>
                                <ul className='space-y-3'>
                                    <li className='bg-primary text-slate-200 flex p-5  w-full rounded-sm items-center'>dsadsasdsa </li>

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