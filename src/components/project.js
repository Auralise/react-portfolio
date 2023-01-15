import React from "react";



const Project = ({ projectName, projectDetails, projectLink, projectGit, projectImage, style }) => {


    return (
    <article className="card m-2" style={style.cardStyle}>
        <img src={projectImage} alt={projectName} className="card-img-top" style={style.imageStyle} />
        <div className="card-body">
            <h5 className="card-title">{projectName}</h5>
            <p className="card-text" style={style.cardTextStyle}>{projectDetails}</p>
            <hr />
            <div className="d-flex justify-content-evenly">
                <a href={projectGit} className="btn" style={style.buttonColour}>GitHub</a>
                <a href={projectLink} className="btn" style={style.buttonColour}>Deployed</a>
            </div>
        </div>
    </article>
    )

}

export default Project;