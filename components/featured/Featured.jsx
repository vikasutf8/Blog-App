import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Featured = () => {
  return (
    <div className='mt-10'>
        <h1 className=' text-6xl'><b>Hey,Vikas Arya here. </b>Discover my stories and creative ideas.</h1>
        <div className="flex mt-10">
            <div className='w-1/2 h-80 min-w-min'>
                <Image className='object-cover aspect-video rounded-xl' src='/loki.jpg' alt="image" width={500} height={500}/>
            </div>
            <div className='flex flex-col w-1/2 px-4'>
                <b className=' text-4xl'>I am <p className=' text-6xl'>
                  <span>Software developer</span>
                  </p></b>
                <p className=' text-gray-700 mt-2'>Greetings, mortals! I am Loki, the God of Mischief and master of deception. Born of Asgard, I am a trickster and a shape-shifter, always weaving intricate plots and schemes to keep life interesting. Approach with caution, for you never know when I might be playing a game of illusion or orchestrating a grand spectacle. Now, what mischief can I assist you with today?</p>
                {/* <Link href={'/'} className='mt-2 text-sm border-b-2 border-red-400 max-w-max px-1 rounded-sm'>Read More</Link> */}
            </div>
        </div>
    </div>
  )
}

export default Featured