'use client'
import Image from 'next/image'
import React from 'react'
import { Masonry } from '@tx666/masonry';


type Props = {
    images: string[]
}

const Gallery = ({ images }:Props) => {

    const columns = {
    xs: 1,
    sm: 1,
    md: 3,
    lg: 3,
    xl: 4,
    xxl: 5,
    };
      
    const masonryData = images.map((imageUrl) => ({ src: imageUrl }));

  return (

    <div className='px-10'>
        <Masonry data={masonryData} column={columns}/>
    </div>
  )
}

export default Gallery