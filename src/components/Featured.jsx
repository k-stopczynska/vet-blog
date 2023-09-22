import React from 'react';
import Button from './Button';

const Featured = () => {

	return (
		<article className='pt-10'>
			<h1 className='text-6xl font-bold'>Wyprany z empatii</h1>
			<h4 className='text-4xl text-secondary-100 leading-[60px]'>
				Weterynaryjny głos z płyty gnojowej...
			</h4>
			<div className='gradient mt-10 w-full h-[600px] p-8 md:p-20 flex flex-col  justify-center md:flex-row md:items-center  md:justify-between gap-12 md:gap-6 overflow-hidden'>
				<div className='md:flex-1'>
					<h2 className='text-xl md:text-4xl font-bold pb-6'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</h2>
					{/* // TODO: path to blog post in url */}
					<Button title='Czytaj dalej' variant='CTA' url='/' />
				</div>
				<p className='text-base md:text-lg md:flex-1'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</div>
		</article>
	);
};

export default Featured;
