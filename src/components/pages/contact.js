import React from "react";


const Contact = () => {

    return (
        <form> 
            <input type="text" id="name" name="name" className="form-control"></input>
            <label htmlFor="name" className="form-label">Name:</label>

            <input type="text" id="email" name="email" className="form-control"></input>
            <label htmlFor="email" className="form-label">Email:</label>

            <textarea id="message" name="message" className="form-control"></textarea>

            <button type="submit" id="message-submit" className="btn btn-success">Submit</button>
        </form>
    )

}

export default Contact;