import TodoReducer, {addTodo, removeTodo, setTodos} from "./todo/todoSlice"
import counterReducer, {incrementCount, decrementCount, resetCount, setCount} from "./counter/counterSlice"
import stopWatchReducer, {startStopWatch, pauseStopWatch, resetStopWatch, tick} from "./stopWatch/stopWatchSlice"



export {TodoReducer, addTodo, removeTodo, setTodos, counterReducer,  incrementCount, decrementCount, resetCount, setCount, stopWatchReducer, startStopWatch, pauseStopWatch, resetStopWatch, tick}