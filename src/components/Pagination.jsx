'use client';
import React from 'react';

const Pagination = () => {

	const classes = 'bg-secondary-200 px-6 py-2';

	return (
		<div className=' flex justify-around items-center my-10'>
			<button className={classes} >
				poprzednia
			</button>
			<button className={classes} >
				następna
			</button>
		</div>
	);
};

export default Pagination;
