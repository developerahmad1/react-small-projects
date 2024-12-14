import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startStopWatch, pauseStopWatch, resetStopWatch, tick } from "../../features";

const StopWatch = () => {
  const { hours, minutes, seconds, centiseconds, isRunning } = useSelector(
    (state) => state.stopWatch
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        dispatch(tick());
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, dispatch]);

  return (
    <div className="p-2 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-6 sm:p-10 md:p-12 rounded-xl shadow-2xl w-full max-w-lg text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-400 mb-6">Stopwatch</h1>
        <div className="mb-8">
          <p className="text-4xl sm:text-6xl font-bold text-pink-500">
            {String(hours).padStart(2, "0")}:
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}.
            {String(centiseconds).padStart(2, "0")}
          </p>
          <p className="text-sm sm:text-base text-gray-400 italic mt-2">
            Accurate to 1/100th of a second
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          {isRunning ? (
            <button
              onClick={() => dispatch(pauseStopWatch())}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-red-400 to-rose-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 hover:from-red-500 hover:to-rose-600 transform transition-all duration-300"
            >
              Pause
            </button>
          ) : (
            <button
              onClick={() => dispatch(startStopWatch())}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 hover:from-green-500 hover:to-teal-600 transform transition-all duration-300"
            >
              Start
            </button>
          )}
          <button
            onClick={() => dispatch(resetStopWatch())}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 hover:from-yellow-500 hover:to-orange-600 transform transition-all duration-300"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
