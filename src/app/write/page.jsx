'use client'
import React from 'react'

const page = () => {

    const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
	};

    return (
		<form
			method='POST'
			onSubmit={handleSubmit}
			className='w-full flex flex-col items-center gap-4'
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
			<button type='submit' className='bg-secondary-200 px-6 py-2 mb-10 w-[20%]'>
				Wyślij
			</button>
		</form>
	);
}

export default page