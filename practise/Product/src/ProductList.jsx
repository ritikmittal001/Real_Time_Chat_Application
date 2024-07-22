import React from 'react';

const ProductList = ({ name, image, price, popularity }) => {
  return (
    <div className='flex justify-center items-center flex-col space-y-10 p-5'>
      <div className='flex flex-row items-center space-x-5 bg-white shadow-lg rounded-lg p-4 w-full max-w-md'>
        <img src={image} alt="product" className='h-16 w-16 rounded-full' />
        <div className='flex flex-col'>
          <h1 className='text-lg font-semibold'>{name}</h1>
          <p className='text-gray-500'>Price: ${price}</p>
          <p className='text-gray-500'>Popularity: {popularity}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
