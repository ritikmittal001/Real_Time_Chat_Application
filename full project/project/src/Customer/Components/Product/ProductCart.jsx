import React from "react";
import "./ProductCart.css";
const ProductCart = ({ product }) => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer ">
      <div>
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>
           
            {product.title}
          </p>
        </div>
        <div className="">
          <p className="font-semibold">{product.price}</p>
          <p className="line-through opacity-50">{product.discountedPrice}</p>
          <p className="text-green-600 font-semibold">{product.discountPersent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
