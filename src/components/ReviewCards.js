import React from 'react'

const ReviewCards = ({name, img}) => {
  return (
    <div className="flex flex-col justify-center gap-3 py-9 border-2 border-yellow-500 rounded-lg px-6 shadow-4xl">
      <div className="personInfo flex gap-3">
         <img src={img} alt="personLogo" className='h-12 w-12 object-contain rounded-full' />
         <div className='flex flex-col gap-2'>
              <p className='font-curve font-semibold text-white font-curve'>{name}</p>
              <p className='text-xs text-yellow-400 font-curve'>Palo ATLO, CA</p>
         </div>
        
      </div>
      <div className='info text-white px-3 mt-3'>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe quasi laudantium temporibus consequuntur, aspernatur esse quaerat.

         </div>

    </div>
  )
}

export default ReviewCards