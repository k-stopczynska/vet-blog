import React, { Suspense } from 'react';
import Link from '../UI/LinkItem';
import Heading from './Heading';
import Loading from '@/app/loading';

const getPosts = async (page, category) => {
	const response = await fetch(
		`https://wypranyzempatii.netlify.app/api/posts?page=${page}&cat=${
			category || ''
		}`,
	);
	if (!response.ok) {
		throw new Error('Loading posts failed...');
	}
	return response.json();
};

const Featured = async () => {
	const { posts } = await getPosts(1, '');
	const { title, slug, desc } = posts[0];

	return (
		<article className='pt-10'>
			<Heading />
			<Suspense fallback={<Loading />}>
				<div className='gradient mt-10 w-full p-8 md:p-20 flex flex-col  justify-center md:flex-row md:items-center  md:justify-between gap-12 md:gap-6 overflow-hidden'>
					<div className='md:flex-1'>
						<h2 className='text-xl md:text-4xl font-bold pb-6'>
							{title}
						</h2>
						<Link
							title='Czytaj dalej'
							variant='CTA'
							url={`/posts/${slug}`}
						/>
					</div>
					<p className='text-base md:text-lg md:flex-1'>
						{desc.substring(0, 400)}...
					</p>
				</div>
			</Suspense>
		</article>
	);
};

export default Featured;
