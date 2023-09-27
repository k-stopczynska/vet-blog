import React from 'react';
import Link from 'next/link';
import AuthLink from './AuthLink';

const Navbar = () => {
	return (
		<nav className='w-full h-24 flex items-center justify-between'>
			<Link href='/'>
				<h3 className='text-2xl lg:text-4xl font-bold'>
					Wyprany z empatii.blog
				</h3>
			</Link>
			<div className='flex gap-4 text-base lg:text-xl'>
				<Link href='/blog' className='link hidden md:flex'>
					Blog
				</Link>
				<Link href='/about' className='link hidden md:flex'>
					O mnie
				</Link>
				<Link href='/contact' className='link hidden md:flex '>
					Kontakt
				</Link>
				<AuthLink />
			</div>
		</nav>
	);
};

export default Navbar;
