import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
	return (
		<article className='gradient mt-10 w-full h-full p-8 md:p-20 flex flex-col gap-12 md:gap-6 overflow-hidden'>
			<div className='relative h-full w-full aspect-[16/9] hover:text-[black] font-bold '>
				<h2 className='text-xl md:text-4xl font-bold pb-6 z-20 transition duration-1000'>
					O mnie...
				</h2>

				<Image
					src='/men.jpg'
					fill
					alt=''
					className='z-10 opacity-30 blur hover:blur-sm hover:invert hover:saturate-200 transition duration-1000 '
				/>

				<p className='z-20 pb-4 text-justify transition duration-700'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Eget magna fermentum iaculis eu non diam phasellus
					vestibulum lorem. Mauris nunc congue nisi vitae. Viverra
					vitae congue eu consequat ac felis. Tellus in metus
					vulputate eu scelerisque felis imperdiet proin. Justo
					laoreet sit amet cursus.{' '}
				</p>
				<p className='z-20 pb-4 text-justify transition duration-1000'>
					Tortor at auctor urna nunc id cursus. Volutpat diam ut
					venenatis tellus in metus vulputate. Posuere sollicitudin
					aliquam ultrices sagittis. Cursus in hac habitasse platea
					dictumst quisque sagittis purus sit. Tellus molestie nunc
					non blandit. Blandit aliquam etiam erat velit scelerisque
					in. Sed vulputate mi sit amet mauris commodo quis imperdiet.
					Elit ut aliquam purus sit amet luctus venenatis lectus
					magna. Id aliquet lectus proin nibh nisl condimentum id.{' '}
				</p>
				<p className='z-20 pb-4 text-justify transition duration-1000'>
					Sed risus pretium quam vulputate dignissim suspendisse in
					est ante. Tempor id eu nisl nunc mi. Tristique senectus et
					netus et malesuada. Turpis egestas sed tempus urna et
					pharetra pharetra massa massa. Feugiat in fermentum posuere
					urna. Id neque aliquam vestibulum morbi blandit. Libero enim
					sed faucibus turpis in eu mi bibendum. Habitant morbi
					tristique senectus et netus et. Viverra suspendisse potenti
					nullam ac tortor vitae purus. Nulla at volutpat diam ut.
					Lobortis elementum nibh tellus molestie nunc. Sit amet risus
					nullam eget felis eget nunc lobortis. Fringilla ut morbi
					tincidunt augue interdum. Facilisis magna etiam tempor orci
					eu lobortis. Sapien eget mi proin sed libero enim sed
					faucibus. Eleifend mi in nulla posuere sollicitudin aliquam
					ultrices sagittis orci. Lacinia quis vel eros donec ac odio
					tempor orci. Turpis massa tincidunt dui ut.{' '}
				</p>
			</div>
		</article>
	);
};


