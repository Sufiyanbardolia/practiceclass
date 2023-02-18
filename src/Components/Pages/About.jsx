import React, { useState } from "react"
import { SubAbout } from "./SubAbout"
export const About=()=>{
    const [text,setText]=useState("hello world")

    const handleChange=(value)=>{
        setText(value)

    }
    return(
        <div>
            <h1>Parent Component</h1>
            <input type="text" value={text} 
            onChange={(e)=>setText(e.target.value)}
             style={{width:"500px", padding:"20px"}}/>
            <SubAbout text={text} handleChange={handleChange}/>
        </div>
    )
}