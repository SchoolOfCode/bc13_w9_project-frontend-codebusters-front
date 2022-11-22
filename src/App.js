import './App.css';
import { FilterBar } from './components/FilterBar/FilterBar.js'
import { Header } from './components/Header/Header.js'
import { Input } from './components/Input/Input.js'
import { ObjectList } from './components/ObjectList/ObjectList.js'
import { useState } from 'react'
import array from './dummydata';

function App() {

  const [object, setObject] = useState([])
  const [input, setInput] = useState("")

  // function handleNewObject(newObject) {
  //   console.log(newObject)
  //   const objectToAdd = [...object, newObject]
  //   setObject(objectToAdd)
  // }

  async function handleNewObject(newObject) {
    const objectToAdd = await fetch("url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newObject)
    })
    const data = await objectToAdd.json()
    console.log(data)
  }

  // function handleDelete(id) {
  //   console.log("hi")
  //   for (let i = 0; i < object.length; i++) {
  //     if (object[i].id === id) {
  //       const deleted = [...object.slice(0, i), ...object.slice(i + 1)];
  //       console.log(deleted)
  //       setObject(deleted);
  //     }
  //   } return
  // }

  async function handleDelete(id) {
    for (let i = 0; i < object.length; i++) {
      if (object[i].id === id) {
        const objectToDelete = await fetch(`url${id}`, {
          method: "DELETE"
        })
        const data = await objectToDelete.json()
        console.log(data)
      } 
    } return
  }

  async function handleClick() {
    setObject(array)
  }

  function handleChange(e) {
    setInput(e.target.value)
  }

  return (
    <div className="App">
      <Header></Header>
      <FilterBar handleClick={handleClick} handleChange={handleChange}></FilterBar>
      <Input handleNewObject={handleNewObject}></Input>
      <ObjectList object={object} handleDelete={handleDelete}></ObjectList>
    </div>
  );
}

export default App;
