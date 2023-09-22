import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Card = ({ title, url, src, date, category }) => {
	return (
		<Link
			href={url}
			className='w-[300px] h-[400px] relative p-10 cardContainer'
		>
			<Image src={src} alt='' fill={true} />
			<p className='cardDate'>
				{date}
				<span className='cardCat pl-2'>{category}</span>
			</p>
			<h3 className='absolute bottom-4 left-0 right-0 p-10 text-center text-2xl font-bold cardText'>
				{title}
			</h3>
		</Link>
	);
};

export default Card;
