import React, { useState } from 'react'
import { Calculator, Count, StopWatch, Todo } from './Components'

const App = () => {
  return (
    <div>
        <Count />
        <StopWatch /> 
        <Calculator />
        <Todo />
    </div>
  )
}

export default App
