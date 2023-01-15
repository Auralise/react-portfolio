import React from "react";
import Project from "../project";

import techBlog from "./images/tech-blog.png";
import interBook from "./images/interbook.png";
import placeholder1 from "./images/placeholder1.jpg";
import placeholder2 from "./images/placeholder2.jpg";
import placeholder3 from "./images/placeholder3.jpg";
import placeholder4 from "./images/placeholder4.jpg";


// This is hardcoded projects. This would be obtained from a backend via an API
const projects = [
    {
        id: 1,
        name: "Tech Blog",
        details: "A tech blog demonstrating express session management",
        link: "https://jps-tech-blog.herokuapp.com/",
        git: "https://github.com/Auralise/tech-blog",
        image: techBlog,
    },
    {
        id: 2,
        name: "InterBook",
        details: "One of the major projects from the Monash Bootcamp course. This is a platform that can be used to sell time sessions between professionals",
        link: "https://inter-book.herokuapp.com/signin",
        git: "https://github.com/breakfireaus/Inter-book",
        image: interBook,
    },
    {
        id: 3,
        name: "Placeholder 1",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: null,
        git: "https://github.com/Auralise/",
        image: placeholder1,
    },
    {
        id: 4,
        name: "Placeholder 2",
        details: "Amet mauris commodo quis imperdiet massa.",
        link: null,
        git: "https://github.com/Auralise/",
        image: placeholder2,
    },
    {
        id: 5,
        name: "Placeholder 3",
        details: "Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis.",
        link: null,
        git: "https://github.com/Auralise/",
        image: placeholder3,
    },
    {
        id: 6,
        name: "Placeholder 4",
        details: "Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada",
        link: null,
        git: "https://github.com/Auralise/tech-blog",
        image: placeholder4,
    },
]

const Portfolio = ({ style }) => {

    
    return (
        <div className="d-flex flex-wrap">
            {projects.map((project) => 
                <Project
                    projectId={project.id}
                    projectName={project.name}
                    projectDetails={project.details}
                    projectGit={project.git}
                    projectImage={project.image}
                    projectLink={project.link}
                    style={style.cards}
                    key={project.id}
                />
            )}
        </div>
    )
}


export default Portfolio;