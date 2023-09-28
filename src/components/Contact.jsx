import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Contact = ({ href, icon, id }) => {
	return (
		<Link href={href} aria-label={id}>
			<Image src={icon} alt={id} width={100} height={100} />
		</Link>
	);
};

export default Contact;
