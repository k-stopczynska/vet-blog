'use client';

import React from 'react';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import CommentInput from './CommentInput';
import Comment from './Comment';

const fetcher = async (url) => {
	const res = await fetch(url);
	const data = await res.json();

	if (!res.ok) {
		const error = new Error(data.message);
		throw error;
	}
	return data;
};

const Comments = ({ postSlug }) => {

	const { data, mutate, isLoading } = useSWR(
		`http://localhost:3000/api/comments?postSlug=${postSlug}`,
		fetcher,
	);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({ desc: e.target[0].value, postSlug }),
		});
		mutate();
		e.target[0].value = '';
	};

	return (
		<section>
			<h3 className='text-lg md:text-2xl font-bold mb-4'>Komentarze</h3>
			<CommentInput handleSubmit={handleSubmit} />
			<div className='flex flex-col gap-4 mt-10'>
				{data?.map((comment) => (
					<Comment {...comment} key={comment._id} />
				))}
			</div>
		</section>
	);
};

export default Comments;
