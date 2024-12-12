"use client";
import React, { useState } from "react";

const Elem = () => {
  const [chose, setChose] = useState<1 | 2 | 3>(2);

  return (
    <div className="w-5/6 mx-auto pt-10">
      <div className="flex  items-center justify-center w-full">
        <button
          className="border-b-2 border-black hover:border-gray-200 focus:border-gray-400  w-full pb-3"
          onClick={() => setChose(1)}
        >
          Details
        </button>
        <button
          className="border-b-2 border-black hover:border-gray-200 focus:border-gray-400 w-full pb-3"
          onClick={() => setChose(2)}
        >
          Raiting
        </button>
        <button
          className="border-b-2 border-black hover:border-gray-200 focus:border-gray-400 w-full pb-3"
          onClick={() => setChose(3)}
        >
          FAQs
        </button>
      </div>
      <div>
        {(() => {
          if (chose === 1) {
            return <p>рпвдлфи</p>;
          } else if (chose === 2) {
            return <p>жопа</p>;
          } else if (chose === 3) {
            return <p>писька</p>;
          }
        })()}
      </div>
    </div>
  );
};

export default Elem;
