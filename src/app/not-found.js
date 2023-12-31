import React from 'react';
import Image from 'next/image';


const NotFound = () => {
    return (
      <div className="min-h-[400px] w-full relative object-cover">
        <Image src='/door.jpg' fill alt="not-found page" className='absolute bottom-0 left-0'/>
        <div className="absolute bottom-4 left-0 flex items-center justify-center w-full h-20 gap-4">
          <h1>There is nothing for you to see, just</h1>
          {/* links in not found don't work for this version of next, can't upgrade bc hosting on netlify won't work with higher version */}
                <a href="/" className="bg-secondary-200 px-6 py-2 hover:bg-light-100 focus:bglight-100 hover:text-secondary-200 focus:text-secondary-200 transition duration-700">go back...</a>
        </div>
      </div>
  )
}

export default NotFound