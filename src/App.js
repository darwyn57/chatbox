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
  const [users, setUsers] = useState([{ pseudo: 'pierre', message: 'message 1' },
  { pseudo: 'mohamed', message: 'asalamu3alaikum' }, { pseudo: 'saïd', message: 'bien ou bien' }]);

  const listuser = users.map((user) =>
    <Message titre={user.pseudo} paragraphe={user.message} />

  );
  return (
    <div className="App">
      <header className="App-header">
        {listuser}

        <Formulaire />

      </header>
    </div>
  );
}

export default App;
