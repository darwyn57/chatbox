import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';



const Connexion = () => {
    const [pseudo, setPseudo] = useState("");
    const [goToChat, setGoToChat] = useState("")

    const handleChange = (event) => {
        setPseudo(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setGoToChat(true);
    }


    if (goToChat) {
        return <Navigate to={'/pseudo/' + pseudo} />
    } else {
        return (

            <div className='connexionBox'>

                <form className='connexion' onSubmit={handleSubmit}>
                    <input
                        value={pseudo}
                        onChange={handleChange}
                        placeholder='pseudo'
                        type='text'
                        required />
                    <button type='submit'>Connexion</button>
                </form>
            </div>
        );
    }
}

export default Connexion;