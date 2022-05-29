import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline'
import React from 'react'
import ReviewCards from './ReviewCards'
import review1 from "../assets/review1.png"
import review2 from "../assets/review2.png"
import review3 from "../assets/review3.png"
const Reviews = () => {
  return (
    <div>
       <div className="flex justify-between w-full items-center">
       <p className="text-3xl text-white font-curve">Reviews</p>
      <div className="flex gap-4 items-center">
        <p><span className='text-white text-sm'>1</span><span className='text-white text-sm opacity-30'>/12</span></p>
        <p className='flex gap-2 items-center'>
          <ArrowLeftIcon  className='h-5 opacity-30 text-white'/>
          <ArrowRightIcon className='h-5 text-white opacity-30'/>
        </p>
      </div>

     </div>
     <div className='bg-blue-600 rounded-md w-12 mt-3  h-1'/>
     <div  className="cardsContainer flex gap-9 my-10">
      <ReviewCards name="Nouman Ahmed" img={review1} />
      <ReviewCards name="Riyan Ahmed" img={review2} />
      <ReviewCards name="Faizan Ahmed" img={review3} />
     </div>
    </div>
  )
}

export default Reviews