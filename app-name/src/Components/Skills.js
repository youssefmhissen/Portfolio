import SkillsItems from "./SkillsItems";
import react from "react";
const skillsList = [
    {Name:"Html",Level:"90%"},
    {Name:"Css",Level:"90%"},
    {Name:"JavaScript",Level:"90%"},
    {Name:"React",Level:"40%"},
    
]
function Skills(){
    return(
        <div className="bg-secondary py-6 " >
            <div className="Container" >
                <h1>Skills</h1>
                {skillsList.map((skill, index) => (
                    <SkillsItems key={index} name={skill.Name} Level={skill.Level} />
                ))}

            </div>

        </div>

    )
}


export default Skills;