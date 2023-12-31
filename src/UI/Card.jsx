import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Card = ({ title, img, createdAt, categorySlug, slug, key }) => {
	return (
		<Link
			href={`/posts/${slug}`}
			className='w-[250px] h-[380px] lg:w-[300px] lg:h-[400px] relative p-10 aspect-[0.67] cardContainer'
			key={key}
		>
			{img && (
				<Image
					src={img}
					alt=''
					fill
				/>
			)}
			<p className='cardDate'>
				{createdAt.split('T')[0]}
				<span className='cardCat pl-2'>{categorySlug}</span>
			</p>
			<h3 className='absolute bottom-4 left-0 right-0 p-10 text-center text-2xl font-bold cardText'>
				{title.trim().split(' ').slice(0, 8).join(' ')}
			</h3>
		</Link>
	);
};

export default Card;
