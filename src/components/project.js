import React from "react";



const Project = ({projectName, projectDetails, projectLink }) => {


    return (
        // TODO: maybe use bootstrap cards? 
        <article className="project-item">
            <h2><a href={`${projectLink}`}>{projectName}</a></h2>
            <p className="project-text">
                {projectDetails}
            </p>

        </article>
    )
}

export default Project;