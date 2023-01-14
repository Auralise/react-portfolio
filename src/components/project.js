import React from "react";



const Project = ({ projectName, projectDetails, projectLink, projectGit, projectImage }) => {

    const style = {
        cardStyle: {
            margin: "1rem",
            flex: "1",
            minWidth: "500px",
    
        },
    
        cardTextStyle: {
            minHeight: "4rem"
        },
        
        imageStyle: {
            height: "280px"
        }
    }

    return (
    <article className="card m-2" style={style.cardStyle} >
        <img src={projectImage} alt={projectName} className="card-img-top" style={style.imageStyle} />
        <div className="card-body">
            <h5 className="card-title">{projectName}</h5>
            <p className="card-text" style={style.cardTextStyle}>{projectDetails}</p>
            <div className="d-flex justify-content-evenly">
                <a href={projectGit} className="btn btn-primary">GitHub</a>
                <a href={projectLink} className="btn btn-primary">Deployed</a>
            </div>
        </div>
    </article>
    )

}

export default Project;