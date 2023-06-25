import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { Button } from './button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputvalue, setinputvalue] = useState('')
  const increment = () => setCount(count +1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)
  const timesTwo = () => setCount(count * 2)
  const divideTwo = () => setCount(count / 2)
  const [greet, setgreetlanguage] = useState('Welcome')
  return (
    <>
    <div className='greet'>
      <h1>{greet}</h1>
      <div className='language'>
        <Button text='english' onClick={() => {setgreetlanguage('Welcome')}} />
        <Button text='español' onClick={() => {setgreetlanguage('Bienvenido')}} />
        <Button text='普通话' onClick={() => {setgreetlanguage('欢迎')}} />
      </div>
    </div>
    <div className='lonediv'>
      <h2>Your message is: {inputvalue}</h2>

    <div className='lonedivtwo'>
      <input type='text' placeholder='Write a message on the website' onChange={(e) => setinputvalue(e.target.value)}/>
    </div>

    </div>
    <div className='firstdiv'>
    <Button color='green' text='*2' onClick={timesTwo} />
    <Button color='lightblue' text='+' onClick={increment} />
    <div className='firstdivtwo'>
    
    <h1>{count}</h1>
    <div className='reset'>
    <Button text='reset' onClick={reset} />
    </div>
    
    </div>

    <Button color='lightred' text='-' onClick={decrement} />
    <Button color='violet' text='/2' onClick={divideTwo} />
    </div>
    
    
    
    
    </>
  )
}

export default App
