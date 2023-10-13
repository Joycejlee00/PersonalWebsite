import React from 'react'
import Image from 'next/image';

export const Avatar = () => {
  return (
    <div className="img">
      <Image
      className='rounded-full'
      src="/me.jpg"
      layout="responsive"
      width={200}
      height={200}
      quality={100}
      alt="This is an image"
      />
    </div>
  )
}
