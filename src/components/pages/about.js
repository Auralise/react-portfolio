import React from "react";
import profileImage from "./images/profile-placeholder.png";


const About = () => {

    const style = {
        imageStyle: {
            maxHeight: "250px",

        }
    }

    return (
        <section> 
            <img src={profileImage} alt="My avatar" className="float-start m-4" style={style.imageStyle} />
            <h2>About Me</h2>
            <p>
                I am a veteran of IT Support who is currently making a switch to a career as a developer. To facilitate this, I have undertaken a bootcamp course through Monash University, focusing specifically on the MERN (MongoDB, Express, React, NodeJS) stack.
            </p>

            <p>
                I have an interest in programming in general and am experimenting with a variety of different languages such as Go and Rust. As the bootcamp that I am attending is teaching vanilla JavaScript, I have also been experimenting with TypeScript in my own time as well. In the past, I have also had some experience writing applications in C# and C++. 
            </p>

            <p>
                Outside of programming, development and Computing in general, I also have an interests in woodworking, hiking, music and gaming. 
            </p>
        </section>
    )
}


export default About;