import React from 'react';
import Image from 'next/image';
import Author from '@/components/Author';
import Comments from '@/components/Comments';

const getPost = async (slug) => {
	const response = await fetch(`http://localhost:3000/api/posts/${slug}`);
	if (!response.ok) {
		throw new Error('fetching this post failed, try again');
	}
	return response.json();
};

const page = async ({ params }) => {
	const { slug } = params;
	const post = await getPost(slug);

	const { title, desc, createdAt, user, img, categorySlug } = post;
	const categoryImages = {
		weterynaria: '/cow.png',
		RPG: '/dice.png',
		gry: '/console.png',
		zwierzaki: '/pet.png',
		lifestyle: '/lifestyle.png',
	};

	return (
		<article className='gradient mt-10 w-full p-8 md:p-20 flex flex-col justify-center gap-12 '>
			<div className='flex flex-col items-center justify-between lg:flex-row'>
				<div className='flex flex-col justify-between h-[300px] flex-1'>
					<h1 className='text-xl md:text-4xl font-bold pb-6'>
						{title}
					</h1>
					<Author
						author={user.name}
						timestamp={createdAt.split('T')[0]}
						image={categoryImages[categorySlug]}
					/>
				</div>
				<div className='lg:flex-1 aspect-auto w-full min-h-[300px] relative mt-10 lg:mt-0'>
					<Image src={img} alt='' fill />
				</div>
			</div>
			<p className='text-base md:text-lg text-justify '>{desc}</p>
			<Comments postSlug={slug} />
		</article>
	);
};

export default page;
