import TodoReducer, {addTodo, removeTodo, setTodos} from "./todo/todoSlice"
import counterReducer, {incrementCount, decrementCount, resetCount} from "./counter/counterSlice"
import stopWatchReducer, {startStopWatch, pauseStopWatch, resetStopWatch, tick} from "./stopWatch/stopWatchSlice"



export {TodoReducer, addTodo, removeTodo, setTodos, counterReducer, stopWatchReducer, incrementCount, decrementCount, resetCount, startStopWatch, pauseStopWatch, resetStopWatch, tick}