import './App.css';
import { FilterBar } from './components/FilterBar/FilterBar.js'
import { Header } from './components/Header/Header.js'
import { Input } from './components/Input/Input.js'
import { ObjectList } from './components/ObjectList/ObjectList.js'
import { useState } from 'react'
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
  // Array file.
  const [arrayFile, setArrayFile] = useState([])
  // State for languages
  const [language, setLanguage] = useState('englishDefinitions')
  // foreign handleChange filterBar
  const [translateSearch, setTranslateSearch] = useState()

  console.log(language)

  async function getAllObjects() {
    const allObjects = await fetch(`http://localhost:3001/api/${language}`)
    let data = await allObjects.json()
    return data.payload
  }

  async function getByTitle() {
    const titleObject = await fetch(`${url}/api/${language}/${input}`)
    let data = await titleObject.json()
    return data.payload
  }

  async function handleNewObject(newObject) {
    const objectToAdd = await fetch(`http://localhost:3001/api/${language}`, {
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
        const objectToDelete = await fetch(`${url}/api/${language}/${id}`, {
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
    
      await fetch(`${url}/api/${language}/${editObject}`, {
       method: 'PATCH',
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(editedItem[0])
    })
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
   // console.log(object)
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

  async function handleTranslation() {
    console.log(translateSearch)
    //translateSearch
    if (!translateSearch) {
      const objects = await getAllObjects()
      setObject(objects)
    }else {
      const titleObject = await getByForeignTitle()
      setObject(titleObject)
    }
  }

  async function getByForeignTitle() {
   
      const titleObject = await fetch(`${url}/api/${language}/english/${translateSearch}`)
    
      let data = await titleObject.json()
      return data.payload
  }


  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleTranslateSearch(e) {
    setTranslateSearch(e.target.value)
  }

  function sortByWeek() {
    let sortedObjects = [...object].sort(function(a,b){return a.week - b.week})
    setObject(sortedObjects)
  }

  function favourite(id) {
    const editFavourite = object.filter(field => { return field.id === id})

    const newArray = [...arrayFile, editFavourite[0]]
    setArrayFile(newArray)
 
  }

  function displayFavourite() {
    setObject(arrayFile)
  }

  function handleClickSpanish() {
    setLanguage('spanishDefinitions')
  }

  function handleClickFrench() {
    setLanguage('frenchDefinitions')
  }

  function handleClickGerman() {
    setLanguage('germanDefinitions')
  }

  function handleClickEnglish() {
    setLanguage('englishDefinitions')
  }

  return (
    <div className="App">
      <div className="main-container">
        <div className="languages">
          <Header handleSpanish={handleClickSpanish} handleFrench={handleClickFrench} handleGerman={handleClickGerman} handleEnglish={handleClickEnglish}></Header>
        </div>

        <div className="search-bar"> 
          <FilterBar foreignClick={handleTranslation} language={language} handleClick={handleClick} handleTranslate={handleTranslateSearch} handleChange={handleChange} handleSort={sortByWeek} displayFave={displayFavourite}></FilterBar>
        </div>
      </div>

      <div className="form-container" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
        <Input visibility={handleVisibility} handleNewObject={handleNewObject}></Input>
      </div>

      <div className="form-container" style={{ visibility: isEditVisible ? 'visible' : 'hidden' }}>
        <Input visibility={handleVisibilityEdit} handleNewObject={handleEdit}></Input>
      </div>

      <div className="main-container">
        <button onClick={handleVisibility}>Add New Object</button>
        <ObjectList object={object} handleFavourite={favourite} handleDelete={handleDelete} handleEdit={handleObjectState}></ObjectList>
      </div>

    </div>
  );

  }
export default App;



// <ObjectList object={object} handleDelete={handleDelete} handleEdit={handleEdit} handleVisibility={handleVisibilityEdit}></ObjectList>