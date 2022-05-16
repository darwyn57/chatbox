import React from 'react';
import { useState } from 'react';
import './App.css';



const Formulaire = () => {
    const [message, setMessage] = useState("")
    const handleSubmit = (event) => {
        setMessage(event.target.value)
    }
    const handleChange = (event) => {
        setMessage(event.target.value)
    }
    return (
        <div>
            <textarea onChange={handleChange} value={message}>écriver votre message</textarea>
            <button onSubmit={handleSubmit} >envoyer</button>

        </div>
    );
};

export default Formulaire;