import './App.css';
import { FilterBar } from './components/FilterBar/FilterBar.js'
import { Header } from './components/Header/Header.js'
import { Input } from './components/Input/Input.js'
import { ObjectList } from './components/ObjectList/ObjectList.js'
import { useState, useEffect } from 'react'
import array from './dummydata';

let url = "http://localhost:3000/api/englishDefinitions"

function App() {

  const [object, setObject] = useState([])
  const [input, setInput] = useState("")
  const [isVisible, setVisible] = useState()

  async function getAllObjects() {
    const allObjects = await fetch("http://localhost:3001/api/englishDefinitions")
    let data = await allObjects.json()

    return data.payload
    // setObject(data)
    // console.log(data)
  }

  // useEffect(() => {
  //   async function getAllObjects() {
  //     const allObjects = await fetch("http://localhost:3000/api/englishDefinitions")
  //     let data = await allObjects.json()
  //     setObject(data)
  //     // console.log(data)
  //   }
  //   getAllObjects()
  // }, []);

  async function handleNewObject(newObject) {
    const objectToAdd = await fetch("url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newObject)
    })
    const objectToAddOnScreen = [...object, newObject]
    setObject(objectToAddOnScreen)
    // const data = await objectToAdd.json()
    // console.log(data)
  }

  useEffect(() => {
    
  }, [object])

  async function handleDelete(id) {
    for (let i = 0; i < object.length; i++) {
      if (object[i].id === id) {
        const objectToDelete = await fetch(`url${id}`, {
          method: "DELETE"
        })
        const deleted = [...object.slice(0, i), ...object.slice(i + 1)];
        setObject(deleted);
        // const data = await objectToDelete.json()
        // console.log(data)
      } 
    } return
  }

  const handleVisibility = event => {
    setVisible(current => !current);
  };

  async function handleClick() {
    // setObject(array)
    const objects = await getAllObjects()
     setObject(objects)
        
  }


  function handleChange(e) {
    setInput(e.target.value)
  }

  return (
    <div className="App">
      <div className="main-container">
        <Header></Header>
        <FilterBar handleClick={handleClick} handleChange={handleChange}></FilterBar>
      </div>
      <div className="form-container" style={{visibility: isVisible ? 'visible' : 'hidden'}}>
        <Input visibility={handleVisibility} handleNewObject={handleNewObject}></Input>
      </div>
      <div className="main-container">
      <button onClick={handleVisibility}>Add New Object</button>
      <ObjectList object={object} handleDelete={handleDelete}></ObjectList>
      </div>
    </div>
  );
}

export default App;
