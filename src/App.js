import './App.css';
import { useEffect, useState } from 'react';
import Characters from './components/Characters';

function App() {

  const [characterList, setCharacterList] = useState([])
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((response) => setCharacterList(response))
    .catch((err)=> console.log(err));
  }, []);
  console.log(characterList.results)

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ul className='list--char'>
            <Characters characterList={characterList}/>

          </ul>
        </div>

      </header>
    </div>
  );
}

export default App;
