import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants';
import { SearchBar } from './index';

const Navbar = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            p={2}
            sx={
                {
                    "position": 'sticky',
                    'background': '#000',
                    'top': 0,
                    'justifyContent': 'space-between'
                }
            }>
                <Link to="/" style={{ display:'flex',alignItems:'center' }}>
                    <img style={{ width:"40px",height:"auto" }} src={logo} alt="Youtube logo"/> <font>Youtube</font>
                </Link>
                <SearchBar/>
        </Stack>
    )
}

export default Navbar
