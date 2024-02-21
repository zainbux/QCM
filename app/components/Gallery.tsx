'use client'
import Image from 'next/image'
import React from 'react'
import { Masonry } from '@tx666/masonry';


type Props = {
    images: string[]
}

const Gallery = ({ images }:Props) => {
;

  return (

    <div className="">

    <div className=" columns-1 md:columns-3 gap-4 mx-auto md:p-5 space-y-4">
      {images.map((image) => (

        <div key={image} className="break-inside-avoid relative group">

          <Image
            src={image}
            alt="Product image"
            className="w-full h-full object-cover object-center lg:h-full lg:w-full rounded-sm"
            width={600}
            height={600}
          />

        </div>
        ))}

      </div>
    </div>

)}

export default Gallery