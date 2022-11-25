import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import {  Box } from "@mui/material";

import { Navbar, Channel, VideoDetails, Search , Feed, PageNotFound} from "./components";

const App = ()=>{
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor:'#000' }} >
    <Navbar/>

    <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id"  element={<VideoDetails/>}/>
        <Route path="/channel/:id"  element={<Channel/>}/>
        <Route path="/search/:q"  element={<Search/>}/>
        <Route path="*"  element={<PageNotFound/>}/>


    </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App
