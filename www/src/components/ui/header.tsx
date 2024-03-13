import React from 'react'

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className='items-center'>
      <h1 className='text-center text-3xl font-extrabold leading-9 tracking-tight'>
        {children}
      </h1>
    </header>
  )
}
