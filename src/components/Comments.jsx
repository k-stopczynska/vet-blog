import React from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';

const Comments = () => {

	const comments = [
		{
			author: 'John Doe',
			timestamp: '12.12.2023',
			image: '/dice.png',
			comment: 'impressive blog, wonder who did design for you?',
		},
		{
			author: 'John Doe',
			timestamp: '12.12.2023',
			image: '/dice.png',
			comment: 'impressive blog, wonder who did design for you?',
		},
		,
		{
			author: 'John Doe',
			timestamp: '12.12.2023',
			image: '/dice.png',
			comment: 'impressive blog, wonder who did design for you?',
		},
		,
		{
			author: 'John Doe',
			timestamp: '12.12.2023',
			image: '/dice.png',
			comment: 'impressive blog, wonder who did design for you?',
		},
	];

	return (
		<section>
			<h3 className='text-lg md:text-2xl font-bold mb-4'>Komentarze</h3>
			<CommentInput />
			<div className="flex flex-col gap-4">
				{comments.map((comment) => (
					<Comment {...comment} />
				))}
			</div>
		</section>
	);
};

export default Comments;
