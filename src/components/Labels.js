import { CalendarIcon, HeartIcon } from '@heroicons/react/outline'
import React from 'react'

function Labels({calender}) {
  return (
    <div className='w-56 h-56 rounded-full  border-gray-400 border text-white'>
        <div className='flex justify-center gap-3 flex-col items-center h-full'>
          { calender ? (<CalendarIcon className='text-white h-8'/>) : ( <HeartIcon className='h-8 text-blue-600'/>)}
            <p className='text-2xl'>0</p>
            <p className='text-xl'>Label</p>

            </div>
    </div>
  )
}

export default Labels