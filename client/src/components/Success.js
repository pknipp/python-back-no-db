import React, { useState, useEffect } from 'react'
const Success = () =>  {
    const [message, setMessage] = useState("initial message");

    useEffect(() => {
        (async () => {
            const response = await fetch('/hello');
            let data = await response.json();
            let newMessage = data.message;
            setMessage(newMessage);
        })()
    }, []);

    return (
        <>
            <h1>Welcome to my no-db fs!</h1>
            <div>Back end says "{message}"".</div>
        </>
    )
}

export default Success
