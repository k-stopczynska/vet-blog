import React from 'react';
import Author from './Author';

const Comment = ({ author, image, timestamp, comment }) => {
	return (
		<div className="flex flex-col w-full max-h-min border gap-4 p-4 shadow-light-100 shadow-sm">
			<p>{comment}</p>
			<Author author={author} image={image} timestamp={timestamp} />
		</div>
	);
};

export default Comment;
