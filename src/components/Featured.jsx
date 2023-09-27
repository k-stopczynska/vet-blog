import React from 'react';
import Button from './Button';

const getPosts = async (page, category) => {
	const response = await fetch(
		`http://localhost:3000/api/posts?page=${page}&cat=${category || ''}`,
		{
			cache: 'no-store',
		},
	);
	if (!response.ok) {
		throw new Error('Loading posts failed...');
	}
	return response.json();
};

const Featured = async() => {
	const { posts, count } = await getPosts(1, '');
	const { title, url, img, createdAt, categorySlug, slug, key, desc } = posts[0];

	return (
		<article className='pt-10'>
			<h1 className='text-6xl font-bold'>Wyprany z empatii</h1>
			<h4 className='text-4xl text-secondary-100 leading-[60px]'>
				Weterynaryjny głos z płyty gnojowej...
			</h4>
			<div className='gradient mt-10 w-full p-8 md:p-20 flex flex-col  justify-center md:flex-row md:items-center  md:justify-between gap-12 md:gap-6 overflow-hidden'>
				<div className='md:flex-1'>
					<h2 className='text-xl md:text-4xl font-bold pb-6'>
						{title}
					</h2>
					<Button
						title='Czytaj dalej'
						variant='CTA'
						url={`/posts/${slug}`}
					/>
				</div>
				<p className='text-base md:text-lg md:flex-1'>
					{desc.substring(0, 400)}...
				</p>
			</div>
		</article>
	);
};

export default Featured;
