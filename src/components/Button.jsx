import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Button = ({ url, title, variant, source, onClick, type, disabled }) => {
	const baseClass = 'border px-6 py-3 ' ;
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
		variantClass = ` flex flex-col lg:flex-row gap-2 border-secondary-100  items-center justify-center w-40 bg-light-100 text-primary-100 uppercase catShadow ${baseClass} ${titleClass}`;
	}
	if (variant === 'simpleButton') {
		variantClass =
			disabled
				? 'border px-6 py-3 opacity-50 cursor-not-allowed'
				: 'bg-secondary-200 px-6 py-2';
	}
	if (variant === 'simpleNavButton') {
		variantClass = ' hidden bg-secondary-200 px-6 py-2 md:flex';
	}

	return (
		<>
			{variant === 'simpleButton' ? (
				<button type={type} className={variantClass} onClick={onClick}>{title}</button>
			) : (
				<Link href={url}>
					<button className={variantClass}>
						{variant === 'category' && (
							<Image src={source} alt='' width={32} height={32} />
						)}
						{title}
					</button>
				</Link>
			)}
		</>
	);
};

export default Button;
