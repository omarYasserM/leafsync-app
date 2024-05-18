import Header from '@/components/common/Header'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className='p-4'>
                {children}
            </main>
        </>
    )
}

export default Layout