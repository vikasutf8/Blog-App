import Image from 'next/image'
import React from 'react'
import image from '../../public/logo.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='m-auto w-9/12 flex my-6 border-t-4 pt-4'>
      <div className='w-1/2'>
        <div>
          <Image src={image} alt='' width={100} height={100}/>
        </div>
        <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo perferendis quae magni aliquid aut, possimus harum ducimus suscipit porro!</p>
      </div>
      <div className='w-1/2 flex justify-end gap-20 text-gray-800'>
        <div className='flex flex-col'>
          <b className=''>Links</b>
          <Link href={'/'}>Homepage</Link>
          <Link href={'/'}>Blog</Link>
          <Link href={'/'}>About</Link>
          <Link href={'/'}>Contact</Link>
        </div>
        <div className='flex flex-col'>
          <b>Tags</b>
          <Link href={'/'}>Style</Link>
          <Link href={'/'}>Fashion</Link>
          <Link href={'/'}>Travel</Link>
          <Link href={'/'}>Coding</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer