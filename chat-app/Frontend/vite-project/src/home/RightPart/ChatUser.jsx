import React from "react";

const ChatUser = () => {
  return (
    <div className="flex space-x-3 justify-center items-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div>
        <h1 className="text-xl">Suresh</h1>
        <span>Offline</span>
      </div>
    </div>
  );
};

export default ChatUser;
