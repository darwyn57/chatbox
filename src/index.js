import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import Connexion from './Connexion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';



const Root = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Connexion />} />
        <Route exact path="/pseudo/:pseudo" element={<App />} />

      </Routes>
    </Router>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

export default Root;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
