import React from 'react';
import { useState } from 'react';
import './App.css';


const Formulaire = () => {
    const [message, setMessage] = useState("")
    const handleSubmit = (event) => {
        setMessage(event.target.value)
    }
    return (
        <div>
            <textarea></textarea>
            <button onSubmit={handleSubmit} >envoyer</button>

        </div>
    );
};

export default Formulaire;