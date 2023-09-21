import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
		<nav className='w-full'>
			<div>Wyprany z empatii.blog</div>
			<div>
				<Link href='/'>Blog</Link>
				<Link href='/about'>O mnie</Link>
				<Link href='/contact'>Kontakt</Link>
				<Link href='/login'>Zaloguj</Link>
			</div>
		</nav>
  );
}

export default Navbar