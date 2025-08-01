import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
    return (
        <Box flex={2} p={2}
            sx={{ display: { xs: 'none', sm: 'block' } }}

        >
            <Box position='fixed' width={300}>
                <Typography variant='h6' fontWeight={100} mt={2} mb={2} >Online Friends</Typography>
                <AvatarGroup total={24} >
                    <Avatar alt="Remy Sharp" src="https://qph.cf2.quoracdn.net/main-qimg-60875a7f53e39c1e9294f6af91af12a0-lq" />
                    <Avatar alt="Travis Howard" src="https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/Shraddha-Kapoor1-322x322.jpg" />
                    <Avatar alt="Agnes Walker" src="https://i.pinimg.com/236x/f1/09/30/f10930517e7fc50b35317ec0e893674a--love-your-hair-dipika-padukone.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://c4.wallpaperflare.com/wallpaper/992/224/62/actor-casual-johnny-depp-people-actors-hd-art-wallpaper-thumb.jpg" />
                </AvatarGroup >
                <Typography variant='h6' fontWeight={100} mt={2}>Latest Photos</Typography>



                <ImageList cols={3} rowHeight='100' gap={5}>
                    <ImageListItem>
                        <img src="https://im.rediff.com/movies/2020/dec/09kartik-aaryan1.jpg" alt='' />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://i0.wp.com/boxofficeworldwide.com/wp-content/uploads/2021/04/SCOOP-Kartik-Aaryan-on-the-look-out-for-a-quick.jpg?fit=620%2C450&ssl=1" alt='' />

                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://www.tellychakkar.com/sites/www.tellychakkar.com/files/styles/amp_metadata_content_image_min_696px_wide/public/images/movie_image/2016/11/22/kartik.jpg?itok=fLEooKCi" alt='' />

                    </ImageListItem>
                  
                </ImageList>
                <Typography variant='h6' fontWeight={100}>Latest Consversation</Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.tellychakkar.com/sites/www.tellychakkar.com/files/styles/amp_metadata_content_image_min_696px_wide/public/images/movie_image/2016/11/22/kartik.jpg?itok=fLEooKCi" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://media.gettyimages.com/photos/indian-bollywood-actress-anushka-sharma-looks-on-during-the-umang-picture-id904693528?s=612x612" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://qph.cf2.quoracdn.net/main-qimg-60875a7f53e39c1e9294f6af91af12a0-lq" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>


            </Box>



        </Box >
    )
}

export default Rightbar
