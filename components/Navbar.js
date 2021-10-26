import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src='/agenda.png' width={90} height={70}></Image>
            </div>
            
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
        </nav>
    )
}

export default Navbar
