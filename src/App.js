import './App.css';
import { FilterBar } from './components/FilterBar/FilterBar.js'
import { Header } from './components/Header/Header.js'
import { Input } from './components/Input/Input.js'
import { ObjectList } from './components/ObjectList/ObjectList.js'
import { useState, useEffect } from 'react'
import array from './dummydata';

let url = "http://localhost:3001"

function App() {

  const [object, setObject] = useState([])
  const [input, setInput] = useState("")
  const [isVisible, setVisible] = useState()
  const [isEditVisible, setEditVisible] = useState()
  const [editObject, setEditObject] = useState()

  async function getAllObjects() {
    const allObjects = await fetch("http://localhost:3001/api/englishDefinitions")
    let data = await allObjects.json()
    return data.payload
  }

  async function getByTitle() {
    const titleObject = await fetch(`${url}/api/englishDefinitions/${input}`)
    let data = await titleObject.json()
    return data.payload
  }

  async function handleNewObject(newObject) {
    const objectToAdd = await fetch("http://localhost:3001/api/englishDefinitions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newObject)
    })
    let data = await objectToAdd.json()
    let brandNewObject = data.payload[0]
    const objectToAddOnScreen = [...object, brandNewObject]
    setObject(objectToAddOnScreen)
    // const data = await objectToAdd.json()
    // console.log(data)
  }


  async function handleDelete(id) {
    for (let i = 0; i < object.length; i++) {
      if (object[i].id === id) {
        const objectToDelete = await fetch(`${url}/api/englishDefinitions/${id}`, {
          method: "DELETE"
        })
        const deleted = [...object.slice(0, i), ...object.slice(i + 1)];
        setObject(deleted);
        // const data = await objectToDelete.json()
        // console.log(data)
      }
    } return
  }

  async function handleEdit(id) {
    console.log("edit", editObject)
    handleVisibilityEdit()
    for (let i = 0; i < object.length; i++){
      if (object[i].id === id) {
        const objectToEdit = await fetch(`${url}/api/englishDefinitions/${id}`, {
          method: 'PATCH',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editObject)
        })
        let data = await objectToEdit.json();
        let brandNewObject = data.payload[0]
        const edited = [...object.slice(0, i), brandNewObject, ...object.slice(i + 1)];
        setObject(edited);
      }
    }
  }

  function handleObjectState(object) {
    setEditObject(object)
  }

  const handleVisibility = event => {
    setVisible(current => !current);
  };

  const handleVisibilityEdit = event => {
    setEditVisible(current => !current);
  };

  async function handleClick() {
    if (!input) {
      const objects = await getAllObjects()
      setObject(objects)
    } else {
      const titleObject = await getByTitle()
      setObject(titleObject)
    }

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
      <div className="form-container" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
        <Input visibility={handleVisibility} handleNewObject={handleNewObject}></Input>
      </div>
      <div className="form-container" style={{ visibility: isEditVisible ? 'visible' : 'hidden' }}>
        <Input visibility={handleVisibilityEdit} handleNewObject={handleObjectState}></Input>
      </div>
      <div className="main-container">
        <button onClick={handleVisibility}>Add New Object</button>
        <ObjectList object={object} handleDelete={handleDelete} handleEdit={handleEdit} handleVisibility={handleVisibilityEdit}></ObjectList>
      </div>
    </div>
  );
}

export default App;
