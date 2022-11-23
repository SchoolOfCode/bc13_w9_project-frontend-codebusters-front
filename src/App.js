import './App.css';
import { FilterBar } from './components/FilterBar/FilterBar.js'
import { Header } from './components/Header/Header.js'
import { Input } from './components/Input/Input.js'
import { ObjectList } from './components/ObjectList/ObjectList.js'
import { useState, useEffect } from 'react'
import array from './dummydata';

let url = "http://localhost:3001"

function App() {

  // Object/or set of objects sent to ObjectList
  const [object, setObject] = useState([])
  // Input sent from FilterBar for the search
  const [input, setInput] = useState("")
  // Visibility for the 'create new object' form
  const [isVisible, setVisible] = useState()
  // Visibility for the 'edit object' form
  const [isEditVisible, setEditVisible] = useState()
  // Id of the object to be edited
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

  async function handleEdit(changes) {

    const editField = object.filter(field => { return field.id === editObject})
    
    const editedItem = createEditObject(editField, changes)
    
    const objectToEdit = await fetch(`${url}/api/englishDefinitions/${editObject}`, {
       method: 'PATCH',
       headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedItem[0])
    })

    let data = await objectToEdit.json();

    let brandNewObject = data.payload[0]


    // for (let i = 0; i < object.length; i++){
    //   if (object[i].id === editObject){

    //     let data = await objectToEdit.json();
    //     console.log(data)
    //     let brandNewObject = data.payload[0]
    //     const edited = [...object.slice(0, i), brandNewObject, ...object.slice(i + 1)];
    //     setObject(edited);
    //   }
    // }
      
  }
  

  function createEditObject(original, newEdit) {

    if(newEdit.title){  
      original[0].title = newEdit.title
    }
    if(newEdit.definition){
      original[0].definition = newEdit.definition
    }
    if(newEdit.example){
      original[0].example = newEdit.example
    }
    if(newEdit.links){
      original[0].links = newEdit.links
    }
    if(newEdit.week){
      original[0].week = newEdit.week
    }
    return original
  }

  function handleObjectState(object) {
    console.log(object)
    setEditObject(object)
    handleVisibilityEdit()
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
        <Input visibility={handleVisibilityEdit} handleNewObject={handleEdit}></Input>
      </div>
      <div className="main-container">
        <button onClick={handleVisibility}>Add New Object</button>
        <ObjectList object={object} handleDelete={handleDelete} handleEdit={handleObjectState}></ObjectList>
      </div>
    </div>
  );
}

export default App;



// <ObjectList object={object} handleDelete={handleDelete} handleEdit={handleEdit} handleVisibility={handleVisibilityEdit}></ObjectList>