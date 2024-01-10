import Image from 'next/image'
import React from 'react'
import parse from 'html-react-parser';


const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: 'no-store'
  });
  try {
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  const body = data?.desc;

  return (
    <div className='w-4/6 m-auto'>
      <div className='flex h-80'>
        <div className='w-2/6 h-80'>
          <div className='text-4xl font-bold text-gray-700'>
            {data?.title}
          </div>
          <div className='flex flex-col mt-10 text-gray-700 '>
            <span>Written by : {data?.author}</span>
            <span className='text-sm'>{data?.date.substring(0, 10)}</span>
          </div>
        </div>
        <div className='w-4/6'>
          {data?.image && <Image src={data.image} alt='' height={300} width={600} className='object-cover max-h-80 aspect-video rounded-lg' />}
        </div>
      </div>
      <div className='my-10'>
        {/* <div className='text-gray-700 text-justify' dangerouslySetInnerHTML={{ __html: body }} /> */}
        {parse(body)}
      </div>
    </div>
  )
}

export default SinglePage