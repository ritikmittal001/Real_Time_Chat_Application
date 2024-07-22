import React from 'react';
import PropTypes from 'prop-types';
const UserProfileCard = ({name,bio,profilePicture}) => {
  return (
    <div className=' screen-h-full flex justify-center items-center mt-28 bg-amber-400'>
        <div className=' flex w-[550px]'>
           
                <img src={profilePicture} alt="" className='w-16 h-16 rounded-full hover:scale-125'/>
         
           <div className='flex flex-col mt-12 justify-center text-white'>
           <h1>{name}</h1>
           <p>{bio}</p>
           </div>
            
            
        </div>

    </div>
  )
}

UserProfileCard.PropTypes={
    name:PropTypes.string.isRequired,
    bio:PropTypes.string.isRequired,
    profilePicture:PropTypes.string.isRequired,
};

export default UserProfileCard