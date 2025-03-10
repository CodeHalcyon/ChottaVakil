import React from 'react'
import AdvantageCard from './AdvantageCard'
const Advantage = () => {
  return (
    <>
        <h1 style={{textAlign:'center'}}>Advantages</h1>
         <div className='advantage-container'>
            <AdvantageCard/>          
            <AdvantageCard/>          
            <AdvantageCard/>          
        </div> 
    </>
  )
}

export default Advantage
