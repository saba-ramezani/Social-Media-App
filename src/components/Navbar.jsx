import { AppBar, Avatar, Badge, Box, Icon, InputBase, styled, Toolbar, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const SearchBar = styled("div")(({theme}) => (
  {
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
  }
))

const Icons = styled(Box)(({theme}) => (
  {
    display: "none",
    gap: 30,
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  }
))

const UserIcons = styled(Box)(({theme}) => (
  {
    display: "flex",
    alignItems: "center",
    gap: 10,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
))

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <TwitterIcon sx={{fontSize: {xs: 25, sm: 40}}}/>
        <SearchBar>
          <InputBase placeholder='search...' />
        </SearchBar>
        <Icons>
          <Badge badgeContent={4} color="error" >
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{width: 40, height: 40}} alt="Saba" src="https://img.freepik.com/premium-vector/girl-character-vector_101266-28463.jpg" />
        </Icons>
        <UserIcons>
          <Avatar sx={{width: 40, height: 40}} alt="Saba" src="https://img.freepik.com/premium-vector/girl-character-vector_101266-28463.jpg" />
          <Typography variant='span'>Saba</Typography>
        </UserIcons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar