import React from 'react'
import { Card, CardContent,CardActions, Typography, Button, Box, Grid, CardMedia, CardActionArea } from '@mui/material'
import './Hero.css'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Hero = () => {

  return (
      <div className='box'>
          <div className='card'>
         <Card sx={{ width: 800, height: 550 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={require("../../assets/code.jpg")}
          alt="code"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            SORTING VISUALIZER
          </Typography>
          <Typography variant="h6" color="text.secondary">
            All the algorithms, data structures and confusing code is put to work here so that you can understand it better 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" startIcon={<BsFacebook />}>
          Facebook
                      </Button>
                       <Button size="small" color="primary" startIcon={<BsTwitter />}>
          Twitter
                      </Button>
                       <Button size="small" color="primary" startIcon={<AiOutlineMail />}>
          Email
        </Button>
      </CardActions>
              </Card>
              </div>
          </div>
  )
}

export default Hero