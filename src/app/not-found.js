'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const NotFound = () => {
    const router = useRouter();
    return (
      <div className="min-h-[400px] w-full relative">
        <Image src='/door.jpg' fill alt="not-found page" className='absolute bottom-0 left-0'/>
        <div className="absolute bottom-4 left-0 flex items-center justify-center w-full h-20 gap-4">
              <h1>There is nothing for you to see, just</h1>
                <a href="/" className="bg-secondary-200 px-6 py-2 hover:bg-light-100 focus:bglight-100 hover:text-secondary-200 focus:text-secondary-200 transition duration-700">go back...</a>
        </div>
      </div>
  )
}

export default NotFound