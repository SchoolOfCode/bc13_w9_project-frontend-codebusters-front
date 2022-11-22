import './App.css';
import {FilterBar} from './components/FilterBar/FilterBar.js'
import {Header} from './components/Header/Header.js'
import {Input} from './components/Input/Input.js'
import {ObjectList} from './components/Input/Input.js'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FilterBar></FilterBar>
      <Input></Input>
      <ObjectList></ObjectList>
    </div>
  );
}

export default App;
