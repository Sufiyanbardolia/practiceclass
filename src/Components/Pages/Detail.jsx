import { Button, Grid } from '@mui/material'
import React from 'react'
import { useLocation, } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export const Detail = () => {
    const location=useLocation()
   const data=location.state;
   



   
  return (
    <React.Fragment>
       <Grid container spacing={1}>
        <Grid item xs={6}>
          <img src={data.image} alt="" />
        </Grid>
        <Grid item xs={6}>
          <h1>Title : {data.title}</h1>  <br />
          <h3>Description : {data.description}</h3> <br /> 
          <h4>price: $ {data.price}</h4> <br />
          <h3>Quantity:{data.Quantity}</h3> <br />
          <h2><span ><RemoveIcon className='add-icone' /> </span> {data.userQuantity} <span > <AddIcon className='add-icone' /></span> </h2>  <br />
          <Button variant='contained'>Add to Cart</Button>
          </Grid>
       </Grid>
        </React.Fragment>
  )
}
