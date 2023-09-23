'use client';
import React from 'react';
import Button from './Button';

const Pagination = () => {
	const handlePrev = () => {
		console.log('prev');
	};

	const handleNext = () => {
		console.log('next');
	};

	return (
		<div className=' flex justify-around items-center my-10'>
			<Button
				url=''
				title='poprzednia'
				variant='simpleButton'
				source=''
				onClick={handlePrev}
				type='button'
			/>
			<Button
				url=''
				title='następna'
				variant='simpleButton'
				source=''
				onClick={handleNext}
				type='button'
			/>
		</div>
	);
};

export default Pagination;
