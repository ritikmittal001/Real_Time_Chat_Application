import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomesectionCard from "../HomeSectionCard/HomesectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import { kurtas } from "../../../asserts/Kurta/kurta";
const HomesectionCarousel = ({data,sectionName}) => {

    const [activeIndex,setActiveIndex]=useState(0);
  const responsive = {
    0: { items: 1 },
    500: { items: 2 },
    718: { items: 3 },
    1024: { items: 5.5 },
  };

  const sildePrev=()=>{
    console.log('slide next')
    setActiveIndex(activeIndex-1);
  }

  const slideNext=()=>setActiveIndex(activeIndex+1);

  const syncActiveIndex=({items})=>setActiveIndex(items);
  const items = data.slice(0,10).map((items) => (
    <HomesectionCard product={items}/>
  ));



  return (
    <div className=" border ">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>

      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex} 
        />
        {/* Right Button */}
        {activeIndex!==items.length-5 && <button
          className="z-50 bg-white absolute top-32 right-0 transform translate-x-1/2 rotate-90custom"
          aria-label="next"
          onClick={slideNext}
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(180deg)", color: "black" }} />
        </button>}

        {/* Left Button */}
          {activeIndex!==0 &&  <button
              className="z-50 bg-white absolute top-32 left-0 transform translate-x-1/2 rotate-90"
              aria-label="previous"
              onClick={sildePrev}
            >
              <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
            </button>}
      </div>
    </div>
  );
};

export default HomesectionCarousel;
