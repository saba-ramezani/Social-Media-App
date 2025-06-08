import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import users from '../data/users'
import fakePosts from '../data/posts'

const Conversations = () => {
  return (
     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
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
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
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
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  )
}

const RightBar = () => {
  return (
    <Box flex={2} p={4} sx={{display: {xs: "none", lg: "block"}}} maxWidth={400}>
      <Box position={"fixed"} width={300} maxWidth={400}>
        <Typography variant='h5' fontWeight={300}>
          Online Friends
          <AvatarGroup max={7} sx={{marginTop: 2}}>
            {users.map((user) => (
              <Avatar alt={user.name} src={user.avatar} />
            ))}
          </AvatarGroup>
        </Typography>
        <Typography variant='h5' fontWeight={300} sx={{marginTop: 4}}>
          Latest Photos
          <ImageList sx={{ height: 164, marginTop: 2 }} cols={3} rowHeight={164} >
            {fakePosts.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  src={item.mediaSrc}
                  alt={"image"}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Typography>
        <Typography variant='h5' fontWeight={300} sx={{marginTop: 4}}>
          Latest Conversations
          <Conversations />
        </Typography>
      </Box>
    </Box >
  )
}

export default RightBar