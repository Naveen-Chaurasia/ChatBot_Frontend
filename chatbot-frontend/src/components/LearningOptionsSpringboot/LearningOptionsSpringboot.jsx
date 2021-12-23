import React from "react";
import "./LearningOptionsSpringboot.css";

const LearningOptionsSpringboot=()=>
{

    //console.log(props);
    const options=[
        {
            text:"Springboot BAsics",
            url:"http://springboot.com",
            id:"1"
        },
        {
            text:"Springboot Intermediate",
            url:"http://springboot.com",
            id:"1"
        },
        {
            text:"Springboot Advance",
            url:"http://sprinboot.com",
            id:"1"
        },

    ]


    const list1=options.map((op)=>(
    
        <li key={op.id} className="link-List-item-url">
         <a 
         href={op.url}
         className="link-list-item-url"
         target="-blank"
         >  
         {op.text}
         </a>
        </li>
    
    ));

    return <ul className="link-list" >{list1} </ul>
};


export default LearningOptionsSpringboot;