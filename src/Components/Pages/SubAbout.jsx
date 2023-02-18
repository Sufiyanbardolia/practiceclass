import React from 'react'

export const SubAbout = (props) => {
    const {text,handleChange}=props
  return (
    <div>
        <h1>Child</h1>
       <input type="text" value={text} onChange={(e)=> handleChange(e.target.value)} style={{width:"500px",padding:"20px"}}/>
       
    </div>
  )
}
