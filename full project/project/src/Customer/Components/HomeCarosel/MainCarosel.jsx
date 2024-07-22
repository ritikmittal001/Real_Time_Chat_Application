import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCaroselData from './MainCaroselData';

const MainCarosel = () => {
    const items = MainCaroselData.map((item, index) => (
        <img className='cursor-pointer -z-10' src={item.image} alt={`carousel-item-${index}`} key={index} />
    ));

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
            
        />
    );
};

export default MainCarosel;
