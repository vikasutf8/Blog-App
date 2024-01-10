import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import parse from 'html-react-parser';

const Card = ({ key, item }) => {
  
  return (
    <div className=' my-10 flex' key={key}>
      <div className='flex-1'>
        {item.image && <Image src={item.image} alt='' height={450} width={450} className='object-cover aspect-video rounded-xl border' />}
      </div>
      <div className='flex flex-col w-7/12 p-5 justify-between'>
        <div className=' flex flex-col mt-0'>
          <p className='text-xs'>{item.date.substring(0, 10)}</p>
          <p className='text-sm text-red-400  capitalize'> {item.catSlug}</p>
          <div className='text-xs'>Written by : {item.author}</div>
        </div>
        <div className=''>
          <Link href={`/posts/${item.slug}`} className=' font-bold text-2xl mt-4'>
            {item.title}
          </Link>
          <p className=' text-gray-800 text-justify overflow-clip'>
            {parse(item.desc.substring(0, 210).trim())}<span>...</span>
          </p>
          <Link href={`/posts/${item.slug}`} className='mt-2 text-sm border-b-2 border-red-400 max-w-max px-1 rounded-sm'>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default Card