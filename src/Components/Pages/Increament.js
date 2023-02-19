import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

export const Increament = () => {
    const dispatch=useDispatch()
    const handleincreament=()=>{
          dispatch({
            type: "COUNT_INCREMENT",
            payload:1
        })
    }
  return (
    <div>
        <Button variant='contained' color='success'  onClick={handleincreament}>increament</Button>
    </div>
  )
}
