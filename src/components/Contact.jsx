import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Contact = ({ href, icon }) => {
	return (
		<Link href={href}>
			<Image src={icon} width={100} height={100} />
		</Link>
	);
};

export default Contact;
