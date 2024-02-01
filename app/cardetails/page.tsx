import React, { useEffect } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types';
import { generateCarImageUrl } from '@/Utils';
import { title } from 'process';

// interface CarDetailsProps{
//   isOpen : boolean;
//   closeModal:() => void;
//   car: CarProps;
// }


const page = ({searchParams}:{searchParams : CarProps}) => {

  return (
    <div className="flex-1 flex flex-col gap-3 px-11">
    <div className="relative w-full h-80 bg-pattern bg-cover bg-center rounded-lg mt-24">
        <Image src={generateCarImageUrl(searchParams)} alt={'hero'} fill priority className='object-contain' />
    </div>
    <div className='flex gap-3'>
        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
        <Image src={generateCarImageUrl(searchParams,'29')} alt={'hero'} fill priority className='object-contain' />
        </div>
        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
        <Image src={generateCarImageUrl(searchParams,'33')} alt={'hero'} fill priority className='object-contain' />
        </div>
        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
        <Image src={generateCarImageUrl(searchParams,'13')} alt={'hero'} fill priority className='object-contain' />
        </div>
    </div>
    <div className='flex flex-1 flex-col gap-3'>
            <h2 className='font-extrabold text-xl capitalize text-center'>{searchParams.make} {searchParams.model}</h2>
            <div className="mt-3 flex flex-wrap gap-4 px-11">
              <div className="flex justify-between gap-5 w-full text-right">
                <h4>City Mileage in Km</h4>
                <p>{Math.ceil(searchParams.city_mpg*0.42514371)}</p>
              </div>
              <div className="flex justify-between gap-5 w-full text-right">
                <h4>Highway Mileage in Km</h4>
                <p>{Math.ceil(searchParams.highway_mpg*0.42514371)}</p>
              </div>
              <div className="flex justify-between gap-5 w-full text-right">
                <h4>Class</h4>
                <p>{searchParams.class.toUpperCase()}</p>
              </div>
              <div className="flex justify-between gap-5 w-full text-right">
                <h4>Displacement</h4>
                <p>{searchParams.displacement}</p>
              </div>
              <div className="flex justify-between gap-5 w-full text-right">
                <h4>Cylinders</h4>
                <p>{searchParams.cylinders}</p>
              </div>
              <div className="flex justify-between gap-5 w-full text-right">
                <h4>Drive</h4>
                <p>{searchParams.drive.toUpperCase()}</p>
              </div>
              <div className="flex justify-between gap-5 w-full text-right">
                <h4>Fuel Type</h4>
                <p>{searchParams.fuel_type.toUpperCase()}</p>
              </div>
              <div className="flex justify-between gap-5 w-full text-right">
                <h4>Manufacturer</h4>
                <p>{searchParams.make.toUpperCase()}</p>
              </div>
              <div className="flex justify-between gap-5 w-full text-right">
                <h4>Model</h4>
                <p>{searchParams.model.toUpperCase()}</p>
              </div>
              <div className="flex justify-between gap-5 w-full text-right">
                <h4>Transmission</h4>
                <p>{searchParams.transmission.toUpperCase()}</p>
              </div>
              <div className="flex justify-between gap-5 w-full text-right">
                <h4>Year</h4>
                <p>{searchParams.year}</p>
              </div>
            </div>
        </div>

</div>
  )
}

export default page
