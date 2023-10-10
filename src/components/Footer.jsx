import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='w-full h-10 absolute bottom-0 left-0 flex items-center justify-center gap-4'>
			Copyright @2023
			<Link href='https://github.com/k-stopczynska' className='link'>
				k-stopczynska
			</Link>
		</footer>
	);
};

export default Footer;
