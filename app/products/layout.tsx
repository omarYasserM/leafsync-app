import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <header className='w-full bg-red-800'>
            LeafSync
        </header>
        {children}</div>
  )
}

export default layout