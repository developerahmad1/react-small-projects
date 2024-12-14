import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { decrementCount, incrementCount, resetCount } from '../../features';

const Count = () => {   
  const { count } = useSelector((state) => state?.counter);   
  const dispatch = useDispatch();    

  return (     
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-800 via-purple-900 to-black text-white p-2">       
      <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-gray-200 p-6 sm:p-10 rounded-xl shadow-2xl w-full sm:w-96">         
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 text-indigo-400">           
          Counter App         
        </h1>         
        <div className="text-center">           
          <p className="text-5xl sm:text-6xl font-black text-pink-500 mb-4">{count}</p>         
        </div>         
        <div className="flex flex-col space-y-4">           
          <button             
            onClick={() => dispatch(incrementCount())}             
            className="w-full px-6 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 hover:from-green-500 hover:to-teal-600 transform transition-all duration-300"           
          >             
            Increment           
          </button>           
          <button             
            onClick={() => dispatch(decrementCount())}             
            className="w-full px-6 py-3 bg-gradient-to-r from-red-400 to-rose-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 hover:from-red-500 hover:to-rose-600 transform transition-all duration-300"           
          >             
            Decrement           
          </button>           
          <button             
            onClick={() => dispatch(resetCount())}             
            className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 hover:from-yellow-500 hover:to-orange-600 transform transition-all duration-300"           
          >             
            Reset           
          </button>         
        </div>       
      </div>     
    </div>   
  ); 
};  

export default Count;
