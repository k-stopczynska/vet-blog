import React from 'react';
import Contact from '@/components/Contact';

const page = () => {
	const contacts = [
		{
			id: 'facebook',
			icon: '/facebook.png',
			href: 'https://www.facebook.com/pawel.stopczynski',
		},

		{
			id: 'mail',
			icon: '/mail.png',
			href: 'mailto:pawel.stopczynski@gmail.com',
		},
	];
	return (
		<section className=' my-20 py-10 gap-6 w-full h-[400px] border flex flex-col items-center justify-center'>
			<h1 className='text-lg md:text-2xl font-bold mb-4'>
				Możesz mnie znaleźć tu:
			</h1>
			<div className="flex gap-6">
				{contacts.map((contact) => (
					<Contact {...contact} key={contact.id} />
				))}
			</div>
		</section>
	);
};

export default page;
