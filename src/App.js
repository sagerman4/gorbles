import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
  const [stateSrc, setStateSrc] = useState('')
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    async function fetchCats() {
      const response = await fetch('https://api.thecatapi.com/v1/images/search')
      const json = await response.json()
      setStateSrc(json[0].url)
    }

    fetchCats()
    setRefresh(false)
  }, [refresh])

  return (
    <div className="App">
      <div className="img-container">
        <h1>Cat Pics!!</h1>
        <img
          width={250}
          alt="cat pics"
          src={stateSrc}
        />
        <br/>
        <button onClick={() => setRefresh(true)}>Refresh, son!</button>
      </div>
    </div>
  );
}

export default App;
