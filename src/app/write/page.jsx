'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Button from '@/components/Button';

const page = () => {
	const router = useRouter();
	const { status, data } = useSession();

	if (status === 'unauthenticated' || data?.user.name !== 'Klaudia Stopczyńska') {
		router.push('/')
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
			// categorySlug: e.target[1].value || 'weterynaria',
			img: e.target[2].value,
			desc: e.target[3].value,
		};

		const response = await fetch('/api/posts', {
			method: 'POST',
			body: JSON.stringify(post),
		});

		if (response.status === 200) {
			const data = await response.json();
			// router.push(`/posts/${data.slug}`);
			console.log(data)
		}

		console.log(data);
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
			<select className='bg-primary-100 border w-full p-4'>
				<option value=''>Choose category</option>
				<option value='weterynaria'>Weterynaria</option>
				<option value='RPG'>RPG</option>
				<option value='gry'>Gry</option>
				<option value='zwierzaki'>Zwierzaki</option>
				<option value='lifestyle'>Lifestyle</option>
			</select>
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
