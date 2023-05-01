import logo from "./logo.svg"
import "./App.css"
import { useEffect, useState } from "react"

function App() {
  const [list, setList] = useState([])

  const handleClick = () => {
    const textA = document.getElementById("text-a")
    setList([...list, textA.value])
    textA.value = ""
  }

  useEffect(() => {
    console.log(list)
  }, [list])
  return (
    <>
      <input id="text-a" type="text" />
      <button type="button" onClick={handleClick}>
        Add
      </button>
      <ul>
        <h1>List</h1>
        {list.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </>
  )
}

export default App
