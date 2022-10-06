import { useState, memo } from 'react'
import './App.css'

function Swatch({ color }) {
  console.log(`Swatch rendered ${color}`)

  return (
    <div
      style={{ margin: 2, width: 75, height: 75, backgroundColor: color }}
    ></div>
  )
}

const MemoedSwatch = memo(Swatch)

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0)
  console.log(`App rendered ${appRenderIndex}`)

  return (
    <div className="App">
      <div>
        <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
          Re-Render App
        </button>
      </div>

      <div>
        <MemoedSwatch color="red" />
      </div>
    </div>
  )
}

export default App
