import { useState } from 'react'
import './App.css'
import TextboxComponent from './components/Charactercounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='font-extrabold'>
      <h1>Analyse your text in real-time.</h1>
      <TextboxComponent />
    </div>
    </>
  )
}

export default App
