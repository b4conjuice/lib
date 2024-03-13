import React from 'react'

const Page = ({ children }: { children: React.ReactNode }) => (
  <div className='flex min-h-screen flex-col bg-cb-dark-blue text-cb-white'>
    {children}
  </div>
)

export default Page
