import React from 'react'
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className='flex items-center justify-center h-screen'>
      <SignIn path='/sign-in'/>
    </main>
  )
}

export default SignInPage