'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/UI/Button';


const NotFound = () => {
    const router = useRouter();
    return (
      <div className="min-h-[400px] w-full relative">
        <Image src='/door.jpg' fill alt="not-found page" className='absolute bottom-0 left-0'/>
        <div className="absolute bottom-4 left-0 flex items-center justify-center w-full h-20">
              <h1>There is nothing for you to see, just</h1>
                <Button title="Go back..." variant="simpleButton" onClick={() => router.push('/')} type="button" />
                <a href="/">go back...</a>
        </div>
      </div>
  )
}

export default NotFound