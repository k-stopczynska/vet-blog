'use client';
import React from 'react';
import Button from '@/components/Button';

const page = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
	};

	return (
		<form
			method='POST'
			onSubmit={handleSubmit}
			className='w-full flex flex-col items-center gap-4 mb-10'
		>
			<input
				name='message'
				placeholder='Title'
				className='bg-primary-100 border w-full p-4'
			/>
			<textarea
				name='message'
				rows={5}
				className='bg-primary-100 border w-full p-4'
				placeholder='Description'
			/>
			<input
				name='message'
				placeholder='Image URL'
				className='bg-primary-100 border w-full p-4'
			/>
			<textarea
				name='message'
				rows={30}
				className='bg-primary-100 border w-full p-4'
				placeholder='Post'
			/>
			<Button
				type='submit'
				variant='simpleButton'
				source=''
				url=''
				title='Wyślij'
			/>
		</form>
	);
};

export default page;
