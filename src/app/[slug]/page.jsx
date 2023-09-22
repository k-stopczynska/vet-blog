import React from 'react';
import Image from 'next/image';

const page = () => {
	return (
		<article className='gradient mt-10 w-full p-8 md:p-20 flex flex-col justify-center gap-12 '>
			<div className='flex flex-col items-center justify-between lg:flex-row'>
				<div className='flex flex-col justify-between h-[300px] flex-1'>
					<h2 className='text-xl md:text-4xl font-bold pb-6'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</h2>
					<div className='flex items-center gap-2 mb-10 lg:mb-0'>
						<Image
							src='/console.png'
							alt='author'
							width={64}
							height={64}
							className='rounded-[50%] bg-light-100 p-2'
						/>
						<div>
							<p>23.12.2023</p>
							<p className='uppercase text-[#0de3e0]'>
								Paweł
								<span className='text-light-100 pl-1'>
									Stopczyński
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className='lg:flex-1 h-[300px] w-full relative'>
					<Image src='/forest.jpg' alt='' fill />
				</div>
			</div>
			<p className='text-base md:text-lg text-justify '>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat
				nulla pariatur.Lorem ipsum dolor sit amet, consectetur
				adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum
				dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
				minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat
				nulla pariatur.Lorem ipsum dolor sit amet, consectetur
				adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum
				dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
				minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat
				nulla pariatur.
			</p>
		</article>
	);
};

export default page;
