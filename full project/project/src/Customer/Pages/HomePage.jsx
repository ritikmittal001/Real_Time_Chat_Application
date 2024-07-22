import React from 'react'
import MainCarosel from '../Components/HomeCarosel/MainCarosel'
import HomesectionCerasol from '../Components/HomesectionCerosal/HomesectionCerasol';
import { mens_kurta } from '../../asserts/Men/men_kurta';
const HomePage = () => {
  return (
    <div>
        <MainCarosel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px10'>
           <HomesectionCerasol data={mens_kurta} sectionName={"Mens's Kurta"}/>
           <HomesectionCerasol data={mens_kurta} sectionName={"Mens's Shoes"}/>
           <HomesectionCerasol data={mens_kurta} sectionName={"Mens's Shirt"}/>
           <HomesectionCerasol data={mens_kurta} sectionName={"Women's Saree"}/>
           <HomesectionCerasol data={mens_kurta} sectionName={"Women's Dress"}/>
         
        </div>
    </div>
  )
}

export default HomePage;
