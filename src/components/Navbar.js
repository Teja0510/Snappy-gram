import styled from '@emotion/styled'
import { AppBar, Badge, InputBase, Toolbar, Typography } from '@mui/material'
import InterestsIcon from '@mui/icons-material/Interests';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import React, { useState } from 'react'
import { Box } from '@mui/system';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'

})


const Search = styled("div")(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: '5px',
    width: '40%',
    
   



}));

const Icon = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems : 'center',
    gap : '20px'

}))
const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems : 'center',
    gap : '20px'

}))
const Navbar = () => {

    const [open , setOpen] = useState(false)

    return (
        <AppBar position='sticky' >
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
                    SnappyGram

                </Typography>
                <InterestsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search><InputBase placeholder='Search'  /></Search>
                <Icon>
                    <Badge badgeContent={2}  color='error' sx={{ display: { xs: 'none', sm: 'block' } }} >
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={2}  color='error' sx={{ display: { xs: 'none', sm: 'block' } }} >
                        <Notifications />
                    </Badge >
                <UserBox onClick={e=>setOpen(true)}>
                <Avatar alt="Remy Sharp" src="https://assets-news.housing.com/news/wp-content/uploads/2021/05/03174521/Actor-Kartik-Aaryan%E2%80%99s-Mumbai-house-Compact-and-elegant-FB-1200x700-compressed.jpg" sx={{width : '30' , height : '30'}}/>
                <Typography  variant="span" sx={{ display: { xs: 'block', sm: 'none' } }} >
                    Kartik Aryan
                </Typography>
                </UserBox>
                </Icon>


            </StyledToolbar>

                <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>


               

        </AppBar>
    )
}

export default Navbar
