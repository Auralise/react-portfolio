import React from "react";
import resume from "./documents/resume_example.docx"

const Resume = () => {

    return (
        <div>
            <p>Please find a copy of my resume here: </p>
            <a href={resume} className="btn btn-primary" >Resume</a>
        </div>

    )
}

export default Resume;