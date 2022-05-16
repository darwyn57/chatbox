import Connexion from './Connexion';
import './App.css';
import { useParams } from 'react-router-dom'
import Message from './Message';
import Formulaire from './Formulaire';
import { useState } from 'react';






function App() {
  const { pseudo } = useParams();
  const [psdo, setPsdo] = useState();
  const [message, setMessage] = useState();
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Message />

        <Formulaire />

      </header>
    </div>
  );
}

export default App;
