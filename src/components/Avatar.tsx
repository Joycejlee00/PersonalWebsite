import React from 'react'
import Image from 'next/image';

export const Avatar = () => {
  return (
    <div className="img">
      <Image
      className='img'
      src="/me.jpg"
      width={700}
      height={700}
      quality={100}
      alt="This is an image"
      />
    </div>
  )
}
