import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="relative mt-5">
    <div className="h-72 2xl:h-96 w-full rounded-2xl overflow-hidden">
      <Image
        src={
          "https://eventmx.com/media/thumbnails/event_cropped_image/3NZqXxegbnSjQmTDowrza3_large.png"
        }
        alt=""
        height={1550}
        width={1550}
        className="h-full w-full object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl">
      <div className="p-5 h-full w-full flex flex-col justify-between items-start">
        <div className="bg-blue py-1 px-2  font-semibold rounded-2xl text-white text-xs">
          Music & Concerts
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold text-white">
            Dashain Night with Albatross & Rockheads
          </h1>
          <p className="max-w-md text-xs text-gray-100 font-medium line-clamp-3 backdrop-blur-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. At consequuntur laboriosam fugiat ipsa
            reprehenderit nobis, in, delectus a doloribus hic
            numquam omnis iste veritatis! Molestiae earum quo
            voluptatibus tempore possimus est velit esse explicabo
            ullam unde, sit rerum vel? Quae blanditiis obcaecati,
            atque ullam veritatis debitis tempora necessitatibus hic
            deserunt.
          </p>
          <div className="flex gap-2">
            <button className="text-xs px-3 py-2 bg-blue text-white font-semibold rounded-lg">
              Book Now
            </button>
            <button className="text-xs px-3 py-2 bg-transparent text-white border border-blue font-semibold rounded-lg backdrop-blur-sm">
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner