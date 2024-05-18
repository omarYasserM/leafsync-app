import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import MaxedWidthContainer from './MaxedWidthContainer'
import Image from 'next/image'
import HLogo from '@/assets/common/horizontal-logo.svg'

const Header = () => {
    return (
        <header className=' bg-secondary text-white'>
            <MaxedWidthContainer className='flex items-center justify-between p-4'>
                <Image src={HLogo} alt='LeafSync' height={50} className='text-2xl font-bold invert'/>
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
            </MaxedWidthContainer>
        </header>
    )
}

export default Header