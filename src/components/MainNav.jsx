import React from 'react'
import { Link } from 'react-router'

function MainNav() {
  return (
    <div className='flex justify-between bg-red-300 px-8 py-4 font-mono'>
      <div className='flex gap-4 '>
        <Link to="/" className='font-bold '>LOGO</Link>
        <Link to="/" className='hover:text-amber-200'>Home</Link>
        <Link to="/about" className='hover:text-amber-200'>About</Link>
      </div>

       <div className='flex gap-4'>
        <Link to="/register" className='hover:text-amber-200'>Register</Link>
        <Link to="/login" className='hover:text-amber-200'>Login</Link>
      </div>

    </div>
  )
}

export default MainNav