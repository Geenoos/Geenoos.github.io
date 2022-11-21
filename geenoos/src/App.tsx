import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>LINE Seed는 LINE의 첫 번째 글꼴입니다. </div>
    </div>
  )
}

export default App
