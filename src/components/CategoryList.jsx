import React, { Suspense } from 'react';
import LinkItem from '../UI/LinkItem';
import Loading from '@/app/loading';

const getCategories = async () => {
	const response = await fetch(
		'https://wypranyzempatii.netlify.app/api/categories',
	);
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
			<Suspense fallback={<Loading />}>
				<div className='flex flex-wrap gap-4 items-center justify-center lg:justify-between mb-10'>
					{categories?.map((category) => (
						<LinkItem
							key={category.title}
							url={`/blog?category=${category.title}`}
							title={category.title}
							variant='category'
							source={category.img}
						/>
					))}
				</div>
			</Suspense>
		</section>
	);
};

export default CategoryList;
