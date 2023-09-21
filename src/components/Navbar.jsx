import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
		<nav className='w-full h-20 flex items-center justify-between'>
			<h3 className="text-2xl font-bold">Wyprany z empatii.blog</h3>
			<div className="flex gap-4 text-xl">
				<Link href='/' className='link'>
					Blog
				</Link>
				<Link href='/about' className='link'>
					O mnie
				</Link>
				<Link href='/contact' className='link'>
					Kontakt
				</Link>
				<Link href='/login' className='link'>
					Zaloguj
				</Link>
			</div>
		</nav>
  );
}

export default Navbar