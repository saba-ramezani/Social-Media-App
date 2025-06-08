import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'
import users from '../data/users'
import fakePosts from '../data/posts'

const RightBar = () => {
  return (
    <Box flex={2} p={4} sx={{display: {xs: "none", lg: "block"}}}>
      <Box position={"fixed"} width={300}>
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
          <ImageList sx={{ width: 500, height: 164, marginTop: 2 }} cols={3} rowHeight={164} >
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
      </Box>
    </Box >
  )
}

export default RightBar