'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

const Pagination = ({page, hasPrev, hasNext}) => {

	const router = useRouter()
	const handlePrev = () => {
		router.push(`?page=${page - 1}`);
	};

	const handleNext = () => {
		router.push(`?page=${page + 1}`);
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
				disabled={!hasPrev}
				name="previous"
			/>
			<Button
				url=''
				title='następna'
				variant='simpleButton'
				source=''
				onClick={handleNext}
				type='button'
				disabled={!hasNext}
				name="next"
			/>
		</div>
	);
};

export default Pagination;
