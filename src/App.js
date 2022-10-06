import { useState, memo, useMemo } from 'react'
import './App.css'

function Swatch({ params }) {
  console.log(`Swatch rendered ${params.color}`)

  return (
    <div
      style={{
        margin: 2,
        width: 75,
        height: 75,
        backgroundColor: params.color,
      }}
    ></div>
  )
}

const MemoedSwatch = memo(Swatch)

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0)
  const [color, setColor] = useState('red')

  console.log(`App rendered ${appRenderIndex}`)

  const params = useMemo(() => ({ color }), [color])

  // Bad useMemo example..
  // let number1, number2
  // const value = useMemo(() => number1 + number2, [number1, number2])
  // const value is a primitive value.. a primitive value being a number, boolean, or string
  // is always going to compare by value.. so you are going to increase the performance overhead for looking at the dependency array.. running the function.. and cacheing the result...

  // Good useMemo example
  // const value = number1 + number2

  return (
    <div className="App">
      <div>
        <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
          Re-Render App
        </button>

        <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>
          Change Color
        </button>
      </div>

      <div>
        <MemoedSwatch params={params} />
      </div>
    </div>
  )
}

export default App
