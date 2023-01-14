import React, { useState } from "react";

import { validateEmail, sendContactMessage } from "../../utils/helpers";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "name"){
            setName(inputValue);
        } else if (inputType ==="email") {
            setEmail(inputValue);
        } else {
            setMessage(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(name.length === 0) {
            setErrorMessage("Please provide a name");
            return;
        } else if(!validateEmail(email)){
            setErrorMessage("Please provide a valid email address");
            return; 
        } else if(message.length === 0) {
            setErrorMessage("Please provide a message");
            return;
        }

        sendContactMessage(name, email, message);

        setName("");
        setEmail("");
        setMessage("");
        setErrorMessage("");
    }

    return (
        
        <form>
            <label htmlFor="name" className="form-label">Name: </label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                value={name} 
                onChange={handleInputChange} 
                className="form-control" 
            />

            <label htmlFor="email" className="form-label">Email: </label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                value={email} 
                onChange={handleInputChange} 
                className="form-control"
            />

            <label htmlFor="message" className="form-label">Message: </label>
            <textarea 
                id="message" 
                name="message" 
                className="form-control mb-2"
                value={message} 
                onChange={handleInputChange} 
            />

            { errorMessage && 
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            }

            <button 
            type="button" 
            id="message-submit" 
            onClick={handleFormSubmit} 
            className="btn btn-success">
                Submit
            </button>
        </form>
        
    )

}

export default Contact;