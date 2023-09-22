import React from 'react';
import Link from 'next/link';

const Button = ({ url, title, variant }) => {


    const baseClass =
		'shadow border px-6 py-3 ';
    const className = baseClass

	return (
		<Link href={url}>
            <button className={className}>{title}</button>
		</Link>
	);
};

export default Button;
