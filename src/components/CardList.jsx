import React from 'react';
import Card from './Card';
import Pagination from '@/components/Pagination';

const CardList = () => {
	const cards = [
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, description, url, source',
			url: '/',
			src: '/mountain.jpg',
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, description, url, source',
			url: '/',
			src: '/mountain2.jpg',
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, description, url, source',
			url: '/',
			src: '/forest.jpg',
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, description, url, source',
			url: '/',
			src: '/mountain.jpg',
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, description, url, source',
			url: '/',
			src: '/mountain2.jpg',
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, description, url, source',
			url: '/',
			src: '/forest.jpg',
		},
	];

	return (
		<>
			<h3 className='text-lg md:text-2xl font-bold mb-4'>Posty</h3>
			<div className='flex flex-wrap justify-center xl:justify-between gap-10'>
				{cards.map((card) => (
					<Card {...card} />
				))}
			</div>
			<Pagination />
		</>
	);
};

export default CardList;
