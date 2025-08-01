import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material'
import {BookmarkAdd, ExpandMore, ExpandMoreOutlined, FavoriteBorder, FavoriteOutlined, MoreVertOutlined, ShareOutlined} from '@mui/icons-material'
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Post = ({image , name}) => {
  return (
    <Card sx={{margin : 5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
          <img src={image} height={45} width={45}/>
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertOutlined/>
        </IconButton>
      }
      title={name}
      subheader="September 14, 2022"
    />
    <CardMedia
      component="img"
      height="10%"
      image={image}
      alt="Paella dish"
    />
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder  />} checkedIcon={<Favorite sx={{color : 'red'}} />} />
      </IconButton>
      <IconButton aria-label="share">
      <Checkbox icon={<BookmarkBorderIcon  />} checkedIcon={<BookmarkAdd />} />
      </IconButton>
      
    </CardActions>
   
  </Card>
  )
}

export default Post
