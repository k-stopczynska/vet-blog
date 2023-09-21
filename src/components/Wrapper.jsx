import React from 'react'

const Wrapper = ({children}) => {
  return (
      <div className=' bg-red-200 mx-auto px-10 md:max-w-[768px] md:px-20 lg:max-w-[1024px] xl:max-w-[1200px] xl:px-20'>{children}</div>
  );
}

export default Wrapper