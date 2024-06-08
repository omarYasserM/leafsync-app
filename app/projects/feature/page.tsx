import { redirect } from 'next/navigation'
import React from 'react'

const Page = () => {
  return (
    redirect('/projects')
  )
}

export default Page