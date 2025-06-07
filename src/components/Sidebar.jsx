import { Box } from '@mui/material'
import React from 'react'

const SideBar = () => {
  return (
    <Box bgcolor={'skyblue'} flex={1} p={2} sx={{display: {xs: "none", sm: "block"}}}>SideBar</Box>
  )
}

export default SideBar