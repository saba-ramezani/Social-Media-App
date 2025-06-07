import {Box, Button, Container, Stack} from '@mui/material'
import { Feed, Navbar, Rightbar, Sidebar } from './components'

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction={'row'} sx={{gap: {xs: 0, sm: 2}}} justifyContent={'space-between'}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default App