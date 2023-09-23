'use client'
import React from 'react';
import Button from './Button';

const CommentInput = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value)
    }
  return (
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
  );
}

export default CommentInput