'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Button from '@/components/Button';

const page = () => {
	const router = useRouter();
	const { status, data } = useSession();

	if (
		status === 'unauthenticated' ||
		data?.user.name !== 'Klaudia Stopczyńska'
	) {
		router.push('/');
	}

	const slugify = (str) =>
		str
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, '')
			.replace(/[\s_-]+/g, '-')
			.replace(/^-+|-+$/g, '');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const post = {
			title: e.target[0].value,
			slug: slugify(e.target[0].value),
			categorySlug: e.target[1].value,
			img: e.target[2].value || e.target[3].value,
			desc: e.target[4].value,
		};

		const response = await fetch('/api/posts', {
			method: 'POST',
			body: JSON.stringify(post),
		});

		if (response.status === 200) {
			const data = await response.json();
			router.push(`/posts/${data.slug}`);
		}
	};

	return (
		<form
			method='POST'
			onSubmit={handleSubmit}
			className='w-full flex flex-col items-center gap-4 mb-10'
		>
			<label htmlFor='title'></label>
			<input
				name='title'
				placeholder='Title'
				className='bg-primary-100 border w-full p-4'
			/>
			<label htmlFor='category-select'></label>
			<select
				className='bg-primary-100 border w-full p-4 text-gray-400'
				name='category-select'
			>
				<option value=''>Choose category</option>
				<option value='weterynaria'>Weterynaria</option>
				<option value='RPG'>RPG</option>
				<option value='gry'>Gry</option>
				<option value='zwierzaki'>Zwierzaki</option>
				<option value='lifestyle'>Lifestyle</option>
			</select>
			<div className='flex w-full gap-4'>
				<label htmlFor='image-url'></label>
				<input
					name='image-url'
					placeholder='Image URL'
					className='bg-primary-100 border w-full p-4 flex-1'
				/>
				<span>or choose one</span>
				<label htmlFor='image-select'></label>
				<select
					className='bg-primary-100 border w-full p-4 flex-1 text-gray-400'
					name='image-select'
				>
					<option value=''>Choose image</option>
					<option value='/street.jpeg'>Ulica</option>
					<option value='/street2.jpeg'>Ulica 2</option>
					<option value='/forest.jpeg'>Las</option>
					<option value='/forest2.jpeg'>Las 2</option>
					<option value='/mountain.jpeg'>Góry</option>
					<option value='/mountain2.jpeg'>Góry 2</option>
				</select>
			</div>
			<label htmlFor='post'></label>
			<textarea
				name='post'
				rows={20}
				className='bg-primary-100 border w-full p-4'
				placeholder='Post'
			/>
			<Button
				type='submit'
				variant='simpleButton'
				source=''
				url=''
				title='Wyślij'
				name='send'
			/>
		</form>
	);
};

export default page;
