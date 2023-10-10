import React from 'react';
import Link from 'next/link';
import AuthLink from './AuthLink';

const Navbar = () => {
	const navLinks = [
		{ url: '/blog', title: 'Blog', variant: 'desktopNavLink' },
		{ url: '/about', title: 'O mnie', variant: 'desktopNavLink' }
	];
	return (
		<nav className='w-full h-24 flex items-center justify-between'>
			<Link href='/'>
				<h3 className='text-2xl lg:text-4xl font-bold pr-4'>.blog</h3>
			</Link>
			<div className='flex items-center gap-4 text-base lg:text-xl'>
				{navLinks.map((navLink) => <Link {...navLink} />)}
				<AuthLink />
			</div>
		</nav>
	);
};

export default Navbar;
