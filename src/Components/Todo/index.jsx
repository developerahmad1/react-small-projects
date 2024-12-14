import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, setTodos } from '../../features';

const Todo = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("tasks"))
    if (data && data?.length > 0) {
      dispatch(setTodos(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-500 to-purple-500 flex flex-col items-center py-10 p-2">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl w-full max-w-xl">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Tasks List</h1>
        
        {/* Input & Add Task Button */}
        <div className="flex flex-col md:flex-row items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
            className="w-full md:w-auto px-6 flex-1  py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          />
          <button
            onClick={handleAddTodo}
            className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {todos?.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-200"
            >
              <p className="text-gray-800 font-medium">{todo.text}</p>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="px-4 py-1 text-red-600 border border-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition duration-200"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        
        {/* No tasks message */}
        {todos?.length === 0 && (
          <p className="text-center text-gray-500 italic mt-6">No tasks added yet. Start by adding a task above!</p>
        )}
      </div>
    </div>
  );
};

export default Todo;
