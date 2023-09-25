import React from 'react';
import Card from './Card';
import Pagination from '@/components/Pagination';

	const getPosts = async(page) => {
		const response = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
			cache: 'no-store',
		});
		if (!response.ok) {
			throw new Error('Loading posts failed...');
		}
		return response.json();
	};

const CardList = async({page}) => {

	const cards = await getPosts(page);

	return (
		<>
			<h3 className='text-lg md:text-2xl font-bold mb-4'>Posty</h3>
			<div className='flex flex-wrap justify-center xl:justify-between gap-10'>
				{cards?.map((card) => (
					<Card {...card} key={card._id} />
				))}
			</div>
			<Pagination page={page} />
		</>
	);
};

export default CardList;
