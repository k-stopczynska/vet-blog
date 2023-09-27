import React from 'react';
import Card from './Card';
import Pagination from '@/components/Pagination';

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

const CardList = async ({ page, category }) => {
	const POSTS_PER_PAGE = 6;
	const { posts, count } = await getPosts(page, category);
	const hasPrev = POSTS_PER_PAGE * (page - 1) > 0;
	const hasNext = POSTS_PER_PAGE * (page - 1) + POSTS_PER_PAGE < count;

	return (
		<>
			<h3 className='text-lg md:text-2xl font-bold mb-4'>Posty</h3>
			<div className='flex flex-wrap justify-center md:justify-between gap-10'>
				{posts?.map((card) => (
					<Card {...card} key={card._id} />
				))}
			</div>
			<Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
		</>
	);
};

export default CardList;
