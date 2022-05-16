import React from 'react';


const Message = (props) => {

    return (
        <div>
            <h1>{props.titre}</h1>
            <p>{props.paragraphe} </p>
        </div>
    );
};

export default Message;