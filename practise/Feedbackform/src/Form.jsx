import React from "react";

const Form = () => {
  return (
    <div className="min-h-screen  bg-slate-500 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg  w-[850px] m-auto h-full">
        <div className="pt-5 mb-8">
          <h1 className="text-3xl font-semibold">Feedback Form</h1>
          <p className="mt-3 text-lg ">
            We would love to hear your thoughts, suggestions, concerns or
            problems with anything so we can improve!
          </p>
        </div>
        <hr />
        <div className="">
          <h2 className="mt-6 font-semibold text-3xl">Feedback Type</h2>
          <div className="space-x-3 text-lg m-4">
          <input className="" type="radio" name="types" value="Comments" />
          <label htmlFor="">Comments</label>
          
          <input type="radio" name="types" value="Comments" />
          <label htmlFor="">Suggestions</label>
          
          <input type="radio" name="types" value="Comments" />
          <label htmlFor="">Questions</label>
          
          </div>
         
        </div>

        <div className="mt-14">
          <h1 className="text-lg font-semibold">Describe Your Feedback:*</h1>
          <input className="w-full mt-4 h-44 border border-black rounded-md hover:border-blue-400 hover:shadow-2xl" type="text" />
        </div>

        <div className="pt-12">
          <h1 className="font-semibold">Name*</h1>
          <div className="flex space-x-6 justify-around">
            <input className="mt-4 border border-gray-500 opacity-50 h-10 rounded-lg w-[300px]" type="text" />
            <input className="mt-4 border border-gray-700 h-10 opacity-50 rounded-lg w-[300px]" type="text" />
          </div>
          <div className="flex justify-start text-sm mt-3 opacity-45">
            <h3 className="ml-9">First Name</h3>
            <h3 className="ml-80">Last Name</h3>
          </div>

          <div className="mt-12">
            <h1 className="font-semibold text-lg">E-mail*</h1>
            <input className="mt-3 border w-60 rounded-md h-10" type="text" placeholder="ex-myname@example.com" />
            <p className="opacity-35 mt-3">example@example.com</p>
          </div>
          <div className="flex justify-center mt-7 ">
            <button className="border w-48 items-center bg-green-400 text-white h-11 rounded-lg hover:bg-green-600" type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
