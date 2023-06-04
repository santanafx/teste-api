import React from 'react'
import './App.css';

function App() {
  const [estado, setEstado] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/dataBase', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },


    }).then((resp) => resp.json()).then(data => { setEstado(data) })
    console.log('teste')
  }, [])

  return (
    <div >
    </div>
  );
}

export default App;
