import { Box, Switch } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import AccountBox from '@mui/icons-material/AccountBox';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Sidebar = ({mode , setMode}) => {
  return (
    <Box  flex={1}  p={2}
    sx={{display : {xs : 'none' , sm : 'block'}}}
    >
        <Box sx={{position : 'fixed'}}>

       <List>
          <ListItem disablePadding>
            <ListItemButton href='#home'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='#Settings'>
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='#home'>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='#home'>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='#'>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='#home'>
              <ListItemIcon>
                <AddIcCallIcon />
              </ListItemIcon>
              <ListItemText primary="Abouts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='#home'>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Person" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='#home'>
              <ListItemIcon>
             <DarkModeIcon/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light')}/>
            </ListItemButton>
          </ListItem>
          </List>
      
        </Box>
    </Box>
  )
}

export default Sidebar
