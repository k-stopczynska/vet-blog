import React, { Suspense } from 'react';
import Loading from '@/app/loading';
import Card from '../UI/Card';
import Pagination from '@/components/Pagination';

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

const CardList = async ({ page, category }) => {
	const POSTS_PER_PAGE = 6;
	const { posts, count } = await getPosts(page, category);
	const hasPrev = POSTS_PER_PAGE * (page - 1) > 0;
	const hasNext = POSTS_PER_PAGE * (page - 1) + POSTS_PER_PAGE < count;

	return (
		<>
			<h3 className='text-lg md:text-2xl font-bold mb-4'>Posty</h3>
			<Suspense fallback={<Loading />}>
				<div className='flex flex-wrap justify-center md:justify-between gap-10'>
					{posts?.map((card) => (
						<Card {...card} key={card._id} />
					))}
				</div>
			</Suspense>
			<Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
		</>
	);
};

export default CardList;
