import React from "react";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div className="px-6 py-4 ">
      <form action="" className="">
       <div className="flex space-x-3">
       <label className="input input-bordered flex items-center gap-2 bg-gray-800 text-white w-[80%] border-[1px] rounded-lg p-3">
          <input type="text" className="grow outline-none" placeholder="Search" />
        </label>
        <button>
          <FaSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
        </button>
       </div>
      </form>
    </div>
  );
};

export default Search;
