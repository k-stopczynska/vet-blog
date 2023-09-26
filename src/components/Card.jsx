import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Card = ({ title, url, img, createdAt, categorySlug, slug }) => {
	return (
		<Link
			href={`/posts/${slug}`}
			className='w-[300px] h-[400px] relative p-10 cardContainer'
		>
			{img && <Image src={img} alt='' fill={true} />}
			<p className='cardDate'>
				{createdAt.split('T')[0]}
				<span className='cardCat pl-2'>{categorySlug}</span>
			</p>
			<h3 className='absolute bottom-4 left-0 right-0 p-10 text-center text-2xl font-bold cardText'>
				{title}
			</h3>
		</Link>
	);
};

export default Card;
