import { CircularProgress } from '@mui/material';
import React from 'react';
import "./Loader.css";

export const Loader = () => {
  return (
    <div className='spinner-container'>
        <div className='loading-spinner'>
        <CircularProgress/>

        </div>

    </div>
  )
}
