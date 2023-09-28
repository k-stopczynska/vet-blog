import React from 'react';
import Button from './Button';

const getCategories = async () => {
	const response = await fetch('http://localhost:3000/api/categories');
	if (!response.ok) {
		throw new Error('Loading categories failed...');
	}
	return response.json();
};

const CategoryList = async () => {
	const categories = await getCategories();
	return (
		<section className='mt-20'>
			<h3 className='text-lg md:text-2xl font-bold mb-4'>
				Popularne kategorie
			</h3>
			<div className='flex flex-wrap gap-4 items-center justify-center lg:justify-between mb-10'>
				{categories?.map((category) => (
					<Button
						key={category.title}
						url={`/blog?category=${category.title}`}
						title={category.title}
						variant='category'
						source={category.img}
						name={`category ${category.title}`}
					/>
				))}
			</div>
		</section>
	);
};

export default CategoryList;
