import React from 'react';
import Button from './Button';

const CategoryList = () => {
  return (
		<section className='mt-20'>
			<h3 className="text-lg md:text-2xl font-bold mb-4">
				Popularne kategorie
			</h3>
			<div className="flex flex-wrap gap-4 items-center justify-center lg:justify-between mb-10">
				<Button  url="/" title="weterynaria" variant="category" source="/cow.png" />
				<Button  url="/" title="RPG" variant="category" source="/dice.png" />
				<Button  url="/" title="gry" variant="category" source="/console.png" />
				<Button  url="/" title="zwierzaki" variant="category" source="/pet.png" />
				<Button  url="/" title="lifestyle" variant="category" source="/lifestyle.png" />
			</div>
		</section>
  );
}

export default CategoryList