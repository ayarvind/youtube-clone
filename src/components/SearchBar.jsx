import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import {SearchIcon} from '@mui/icons-material'

const SearchBar = () => {
  return (
   <Paper
        component = "form"
        onSubmit={()=>{}}
        sx={{
            borderRadius :20,
            border:'none',
            p1:2,
            boxShadow:'none',
            mr:{sm:5}

        }}
   >
  {/* Hello comment */}
    <input 
    placeholder="Search.."
    
    />
   </Paper>
  )
}

export default SearchBar
