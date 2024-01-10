import React from 'react'
import Link from 'next/link'
import logo from '../../public/logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-9/12 m-auto flex justify-between items-center py-2 border-b-4 mb-10'>
        <Link className='' href={'/'}>
          <Image src={logo} alt='v.blogs' height={140} width={140}/>
        </Link>
        <div className='flex items-center'>
            <Link className='ml-5' href={'/'}>Homepage</Link>
            <Link className='ml-5' href={'/contact'}>Contact</Link>
            <Link className='ml-5' href={'/about'}>About</Link>
            <Link className='ml-5 bg-emerald-500 hover:bg-emerald-600 text-white py-1 px-3  rounded-full place-items-center' href={'/write'}>Write</Link>
        </div>
    </div>
  )
}

export default Navbar