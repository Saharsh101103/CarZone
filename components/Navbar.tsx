import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'
const Navbar = () => {
  return (
    <header className='my-5 w-full absolute z-10'>
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
            <Link className="flex justify-center items-center" href={'/'}>
                <Image src="/logo.png" alt = "logo" width={170} height={70} className='object-contain' />
            </Link>
            <CustomButton title = "Sign In" btnType = "button" containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'></CustomButton>
        </nav>
    </header>
  )
}

export default Navbar