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
      <Input></Input>
      <ObjectList object={object}></ObjectList>
    </div>
  );
}

export default App;
