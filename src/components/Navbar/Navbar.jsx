import React from 'react'
import {Box, AppBar, Toolbar, IconButton, Typography, Button, ButtonGroup } from '@mui/material';
import { BsTextParagraph } from "react-icons/bs";
import { resetArray } from '../SortingVisualizer/SortingVisualizer'

const Navbar = () => {
  return (
      <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar color='transparent' position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <BsTextParagraph/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Sorting Visualizer
         </Typography>
       {/* <ButtonGroup>
          <Button color="primary" >Generate New Array</Button>
          <Button color="secondary" >Merge Sort</Button>
          <Button color="info">Quick Sort</Button>
          <Button color="success">Heap Sort</Button>
          <Button color="error">Bubble Sort</Button>
          <Button color="warning" >Test Sorting Algorithms (BROKEN)</Button>
        </ButtonGroup> */}
        </Toolbar>
      </AppBar>
          </Box>
          <div>
  <div className='buttons'>
        </div>
          </div>
      </div>
      
  )
}

export default Navbar