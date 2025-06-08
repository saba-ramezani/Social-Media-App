import {Box, Stack} from '@mui/material'
import { Add, Feed, Navbar, Rightbar, Sidebar } from './components'

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction={'row'} sx={{gap: {xs: 0, md: 2}}} justifyContent={'space-between'}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  )
}

export default App