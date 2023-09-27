'use client'
import React from 'react';
import { useSession } from 'next-auth/react';
import Button from './Button';

const CommentInput = ({handleSubmit}) => {
	const { status } = useSession();

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(e.target[0].value)
	// }
	return (
		<>
			{status !== 'authenticated' && (
				<p>Musisz być zalogowany, aby dodawać komentarze</p>
			)}
			{status === 'authenticated' && (
				<form method='POST' onSubmit={handleSubmit} className='w-full'>
					<textarea
						name='message'
						rows={5}
						className='text-primary-100 w-full p-4'
					/>
					<Button
						type='submit'
						variant='simpleButton'
						source=''
						url=''
						title='Wyślij'
					/>
				</form>
			)}
		</>
	);
}

export default CommentInput