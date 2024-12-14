import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input)); // Evaluate the input
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-800 via-purple-900 to-black text-white p-2">
      <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-gray-200 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl w-full sm:w-96 md:w-1/3">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center mb-6 text-indigo-400">
          Calculator
        </h1>

        {/* Display */}
        <div className="bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg shadow-inner p-4 mb-6">
          <div className="text-right text-2xl font-mono text-white mb-1">
            {input || "0"}
          </div>
          <div className="text-right text-lg font-mono text-green-300">
            {result || ""}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {/* Top Row */}
          {["C", "DEL", "%", "/"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="py-4 bg-gradient-to-br from-red-400 to-red-600 text-white font-bold rounded-lg shadow-md hover:scale-105 transform transition-all duration-200"
            >
              {btn}
            </button>
          ))}
          {/* Second Row */}
          {["7", "8", "9", "*"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="py-4 bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold rounded-lg shadow-md hover:scale-105 transform transition-all duration-200"
            >
              {btn}
            </button>
          ))}
          {/* Third Row */}
          {["4", "5", "6", "-"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="py-4 bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold rounded-lg shadow-md hover:scale-105 transform transition-all duration-200"
            >
              {btn}
            </button>
          ))}
          {/* Fourth Row */}
          {["1", "2", "3", "+"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="py-4 bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold rounded-lg shadow-md hover:scale-105 transform transition-all duration-200"
            >
              {btn}
            </button>
          ))}
          {/* Fifth Row */}
          <button
            onClick={() => handleButtonClick("0")}
            className="col-span-2 py-4 bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold rounded-lg shadow-md hover:scale-105 transform transition-all duration-200"
          >
            0
          </button>
          <button
            onClick={() => handleButtonClick(".")}
            className="py-4 bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold rounded-lg shadow-md hover:scale-105 transform transition-all duration-200"
          >
            .
          </button>
          <button
            onClick={() => handleButtonClick("=")}
            className="py-4 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white font-bold rounded-lg shadow-md hover:scale-105 transform transition-all duration-200"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
