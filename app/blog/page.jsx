import CardList from '@/components/cardList/CardList'
import React from 'react'

const BlogPage = ({ searchParams }) => {

  const { cat } = searchParams;
  return (
    <div className='w-4/6 m-auto '>
      <div className='bg-orange-400 py-1 text-lg font-bold text-white text-center my-10 capitalize'>
        {cat} Blog
      </div>
      <CardList cat={cat} />
    </div>
  )
}

export default BlogPage