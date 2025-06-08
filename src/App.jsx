import {Box, createTheme, Stack, ThemeProvider} from '@mui/material'
import { Add, Feed, Navbar, Rightbar, Sidebar } from './components'
import { useState } from 'react'

const App = () => {
  const [mode, setMode] = useState('dark')
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction={'row'} sx={{gap: {xs: 0, md: 2}}} justifyContent={'space-between'}>
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
    
  )
}

export default App