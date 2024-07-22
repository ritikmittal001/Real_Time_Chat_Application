import React from "react";
import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-24 h-24 lg:w-36 lg:h-36">
          <img
            className="w-full h-full object-cover object-top rounded"
            src="https://rukminim1.flixcart.com/image/612/612/kb1470w0/jean/x/r/a/30-11274626-roadster-original-imafsgsthk6gdpjg.jpeg?q=70"
            alt="Product"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Regular Mid Rise Blue Jeans</p>
          <p className="opacity-70">Size: L, Blue</p>
          <p className="opacity-70 mt-2">Seller: Roadster</p>
          <div className="flex space-x-5 items-center text-gray-900 mt-4">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-green-600 font-semibold">5% Off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center justify-between space-y-4 lg:space-y-0 lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-3 border rounded-sm">3</span>
          <IconButton sx={{bgcolor:"RGB(145 85 253)"}}>
            <AddCircleIcon />
          </IconButton>
        </div>
        <div>
          <Button variant="contained" color="error">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
