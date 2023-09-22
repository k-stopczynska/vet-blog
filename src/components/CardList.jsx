import React from 'react';
import Card from './Card';
import Pagination from '@/components/Pagination';

const CardList = () => {
	const cards = [
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, description, url, source',
			date: '23.12.2023',
			category: 'Weterynaria',
			url: '/',
			src: '/mountain.jpg',
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, description, url, source',
			date: '23.12.2023',
			category: 'lifestyle',
			url: '/',
			src: '/mountain2.jpg',
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, description, url, source',
			date: '23.12.2023',
			category: 'RPG',
			url: '/',
			src: '/forest.jpg',
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, description, url, source',
			date: '23.12.2023',
			category: 'weterynaria',
			url: '/',
			src: '/mountain.jpg',
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, description, url, source',
			date: '23.12.2023',
			category: 'zwierzaki',
			url: '/',
			src: '/mountain2.jpg',
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, description, url, source',
			date: '23.12.2023',
			category: 'gry',
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
