import React from 'react';
import Image from 'next/image';
import LinkItem from '@/UI/LinkItem';


const NotFound = () => {
  return (
      <div className="h-[400px] w-full relative">
        <Image src='/door.jpg' fill alt="not-found page" className='absolute bottom-0 left-0'/>
        <div className="absolute bottom-10 left-0 flex items-center justify-center w-full h-20">
            <h1>There is nothing for you to see, just go back...</h1><LinkItem url='/' variant="CTA" title="Go back" />
        </div>
      </div>
  )
}

export default NotFound