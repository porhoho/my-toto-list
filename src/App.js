import logo from "./logo.svg"
import "./App.css"
import { useEffect, useState, useRef } from "react"

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

  // const inputRef = useRef(null)

  // const handleClick = () => {
  //   inputRef.current.focus()
  //   console.log(inputRef.current)
  //   const i = inputRef.current
  //   i.value = "hoho"
  // }

  // return (
  //   <div>
  //     <p ref={inputRef}>777</p>
  //     <input type="text" ref={inputRef} />

  //     <button onClick={handleClick}>Focus Input</button>
  //   </div>
  // )
}

export default App
