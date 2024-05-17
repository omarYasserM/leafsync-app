import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='flex items-center justify-between p-4 bg-gray-800 text-white'>
            <h1 className='text-2xl font-bold'>My App</h1>
            <nav>
                <ul className='flex space-x-4'>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/projects'>Projects</Link>
                    </li>

                </ul>
            </nav>
            <UserButton />
        </header>
    )
}

export default Header