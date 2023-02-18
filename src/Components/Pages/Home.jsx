import React, { useEffect, useState } from "react"
import {Button, Card, CardContent, Grid, TextField, Badge} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from "axios"
import {useNavigate } from "react-router-dom";
import { addQuantity, handleDrcementQty, handleIncrementQty } from "../Utility";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const Home=()=>{
    const [data,setData]=useState([])
    const [copyData,setCopyData]=useState([])
    const [addToCard,setAddToCard]=useState([])
    const [category,setCategory]=useState([])
    const [search,setSearch]=useState('')
    const navigate=useNavigate()
    

    // const getData= async ()=>{
    //     const res= await axios.get("https://fakestoreapi.com/products")
    //     console.log(res.data);
    //     setData(res.data)
    // }
    async function addData(){
        const getData= await axios.get("https://fakestoreapi.com/products")
        console.log(getData);
        setData(addQuantity(getData.data)) ;
        setCopyData(addQuantity(getData.data) );
        
        const res= await axios.get('https://fakestoreapi.com/products/categories')
        setCategory([...res.data,"All"])
    }
    
    const handleAddtoCard=(item)=>{

        const duplicateCart=addToCard.some((elem)=> elem.id==item.id)
        if(!duplicateCart){
        setAddToCard([...addToCard,item])
        }
    }
    
//     const handlefilter=(value)=>{
//         const searchData=copyData.filter((item)=>item.title.toUpperCase().includes(value.toUpperCase()))
//    setData(searchData)
//     }
    const handleButtonSearch=(userCategory)=>{
        if("All" == userCategory){
            setData(copyData)

        }else{
        const search= copyData.filter((item)=>item.category.includes(userCategory))
        setData(search)
    }}
    const handleNavigate=(item)=>{
        navigate('./Detail',{state:item})
    }
    const handleIncrement=(id)=>{
        const res= handleIncrementQty(copyData,id);
        setData(res);
        setCopyData(res)
    }
    const handleDecrement=(id)=>{
        const res= handleDrcementQty(copyData,id);
        setData(res);
        setCopyData(res)
    }

   

    useEffect(()=>{
        addData();
 },[]);
 useEffect(()=>{
    const searchData=copyData.filter((item)=>item.title.toUpperCase().includes(search.toUpperCase()))
    setData(searchData)
console.log(search);
},[search])
  
    return(
        <div> 
            <Grid container spacing={3} style={{marginTop:0}}>
                {category.map((item,index)=>{ 
                    return(
                        <Grid item xs={item=="All" ?1:2 } key={index} className="Button-container" onClick={()=>handleButtonSearch(item)}> <Button variant="contained">{item}</Button></Grid>
                    )
                })}


                {/* <Grid item xs={2} className="Button-container" onClick={()=>handleButtonSearch("men's clothing")}> <Button variant="contained">Mens</Button></Grid>
                <Grid item xs={2} className="Button-container" onClick={()=>handleButtonSearch("women's clothing")}><Button variant="contained">Womens</Button></Grid>
                <Grid item xs={2} className="Button-container" onClick={()=>handleButtonSearch("electronics")}><Button variant="contained">Electric</Button></Grid>
                <Grid item xs={2} className="Button-container" onClick={()=>handleButtonSearch("jewelery")}><Button variant="contained">Jewllory</Button></Grid> */}
                {/* <Grid item xs={1} className="Button-container" onClick={()=>handleButtonSearch("All")}><Button variant="contained">All</Button></Grid> */}

                <Grid item xs={2} className="Button-container"><TextField label="search" fullWidth onChange={(e)=>setSearch(e.target.value)}/> </Grid>
                <Grid item xs={1} className="Button-container"> <Badge color="secondary" badgeContent={addToCard.length} showZero>
                <ShoppingCartIcon style={{color: "#1976d2", fontSize:40, cursor:"pointer"}}/>
            </Badge></Grid>

            
              
            {data.map((item,index)=>{
             return (
            <Grid item xs={12} md={3} key={index}>
                <Card sx={{height:400 }}>
                    <CardContent>
                        <img src={item.image} width={200} height={200} style={{position:"relative", left:40}}/>
                        <h3>Title :{item.title.substring(0,30)}{item.title.length > 30 && "... "}</h3>
                        <h4>Title : ${item.price}</h4>

                        <h2><span ><RemoveIcon className='add-icone' onClick={()=>item.userQuantity>0 && handleDecrement(item.id) } />
                         </span> {item.userQuantity} 
                         <span > <AddIcon className='add-icone' onClick={()=> handleIncrement(item.id)}/>
                         </span> </h2>  <br />
          



                        <Button variant="contained" color="error" onClick={()=>handleNavigate(item)}>  Detail </Button>
                        <Button variant="contained" sx={{position: "relative", left:90}}
                        onClick={()=>handleAddtoCard(item)}>Add To Card</Button>
                    </CardContent>
                 </Card>
             </Grid> 
                
                       
                
                )
            })}
             </Grid>
        </div>
    )
}