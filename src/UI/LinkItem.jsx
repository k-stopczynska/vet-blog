import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LinkItem = ({ url, title, variant, source }) => {
	const baseClass = 'border px-6 py-3 ';
	let variantClass;
	let titleClass =
		title === 'weterynaria'
			? 'bg-orange-200'
			: title === 'RPG'
			? 'bg-blue-200'
			: title === 'gry'
			? 'bg-yellow-200'
			: title === 'zwierzaki'
			? 'bg-green-200'
			: 'bg-pink-200';
	if (variant === 'CTA') {
		variantClass = `shadow ${baseClass} `;
	}
	if (variant === 'category') {
		variantClass = ` flex flex-col lg:flex-row gap-2 border-secondary-100  items-center justify-center w-40 bg-light-100 text-primary-100 font-bold uppercase catShadow ${baseClass} ${titleClass}`;
	}
	if (variant === 'desktopNavLink') {
		variantClass = 'link hidden md:flex';
	}
	if (variant === 'mobileNavLink') {
		variantClass = 'link';
	}
	return (
		<Link href={url} className={variantClass}>
			{variant === 'category' && (
				<Image src={source} alt='' width={32} height={32} />
			)}
			{title}
		</Link>
	);
};

export default LinkItem;
