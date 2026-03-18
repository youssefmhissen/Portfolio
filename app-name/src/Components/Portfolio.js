import ProjectCards from './ProjectCards';
import React from 'react';
function Portfolio(){
    const projects =[
        
{title:"Web Design", description:"Designing a responsive website using HTML, CSS, and JavaScript."},
        {title:"Logo Design",description:"Creating a modern logo for a tech startup using Adobe Illustrator."},
        {title:"Mobile App UI",description:"Designing a user-friendly interface for a mobile application using Figma."}
    ]

    

    return(
        <div className="container" >
            <h2>Portfolio</h2>
            <div className="row" >
                {projects.map((project, index) => (
                    <div className="col-md-4 mb-4" key={index} >
                        <ProjectCards title={project.title} description={project.description} />
                    </div>
                ))}
                

            </div>



        </div>


    )
}
export default Portfolio;