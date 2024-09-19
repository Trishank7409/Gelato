import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Box, ThemeProvider } from '@mui/material'
import theme from './theme/index.ts'
import { DrawerProvider } from './context/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DrawerProvider>
    <ThemeProvider theme={theme}>
    <Box sx={{height:'100vh'}}>
    <App />
    </Box>
  </ThemeProvider>
    </DrawerProvider> 
  </StrictMode>,
)
