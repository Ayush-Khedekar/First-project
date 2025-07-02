// import React from 'react'

import { useReducer } from "react";

const reducer = (
  state: number,
  action: "increment" | "decrement" | "reset"
) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return (state = 0);
  }
};

export default function Practicehooks() {
  // useReducer(state,action)=>{
  //     switch(action){
  //         case "increment":
  //         return state + 1
  //     }
  // }
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 p-5 text-2xl h-[80vh] bg-blue-900">
        <p className="bg-white w-[20%] px-2 hover:scale-[1.04] duration-200 hover:ease-in shadow-lg shadow-amber-500 font-medium">
          count {count}
        </p>
        <div className="flex flex-col justify-center gap-4 w-full items-center">
          <button
            className="bg-white w-[20%] hover:scale-[1.05] duration-200 hover:ease-in shadow-lg shadow-green-600 "
            onClick={() => dispatch("increment")}
          >
            Increment(+)
          </button>
          <button
            className="bg-white w-[20%] hover:scale-[1.05] duration-200 hover:ease-in shadow-lg shadow-red-900 "
            onClick={() => dispatch("decrement")}
          >
            decrement(-)
          </button>
          <button
            className="bg-white w-[20%] hover:scale-[1.05] duration-200 hover:ease-in shadow-lg shadow-gray-900 "
            onClick={() => dispatch("reset")}
          >
            reset(0)
          </button>
        </div>
      </div>
    </>
  );
}
