import React from 'react'
import Cards from './Cards'
import person4 from "../assets/person4.png";
import person3 from "../assets/person3.png";
import person2 from "../assets/person2.png";
import person1 from "../assets/person1.png";
const Shows = () => {
  return (
    <div>
     <div className="flex justify-between w-full items-center">
       <p className="text-3xl text-white font-curve">Upcoming Shows</p>
       <p className='text-xm text-yellow-400 cursor-pointer hover:text-yellow-700 font-curve'> View All</p>

     </div>
     <div className='bg-blue-600 rounded-md w-12 mt-3 h-1'/>
     <div className="cardsContainer flex gap-10 my-10">
        <Cards name="Benny Dayal" category="Folk"  img={person4}/>
        <Cards name="Vijay Yesudas" category="Bollywood" img={person3} />
        <Cards name="Andrea Jeremiah" category="Folk" img={person2} />
        <Cards name="Shilpa Rao" category="Folk"  img={person1}/>
     </div>

    </div>
  )
}

 
export default Shows