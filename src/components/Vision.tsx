import React from 'react';
import kitchen  from '../assets/kitchen.png';

const Vision: React.FC = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between items-center h-full gap-8 py-12">
      <div className="flex flex-col gap-8 md:max-w-[50%]">
        <h2 className='text-4xl font-semibold'>The Best Furniture Manufacturer of Your Choice</h2>
        <p className='md:max-w-[90%]'>Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services \</p>
        </div>
      <div className="rounded-lg overflow-hidden lg:max-w-[40%]">
        <img
          src={kitchen}
          alt="Living Room"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    )
}

export default Vision