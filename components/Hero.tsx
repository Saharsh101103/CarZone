"use client"; 
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import Link from 'next/link';
import { CarCard } from '.';



const Hero = () => {
  
    const handleScroll = (e: React.ChangeEvent<any>) => {
      e.preventDefault();
      window.scrollTo({
        top: 1000 ,
        behavior: 'smooth'})
    }
  return (
    <div className='hero'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className='hero__title'>Find, book or rent a car - quickly and easily</h1>

            <p className="hero__subtitle">Streamline your car rental experience with our effortless booking process.</p>
      
       <CustomButton
       title ="Explore Cars" containerStyles="bg-primary-blue text-white rounded-full mt-10" handleClick={handleScroll} />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/m4.png" alt='hero'  className='object-contain scale-150' fill />
                </div>
                <div className="hero__image-overlay"></div>
            
        </div>
    </div>
  )
}

export default Hero