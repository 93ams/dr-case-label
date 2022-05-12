import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material'
import typography from './typography'

const theme = createTheme({
  typography,
  palette: {
    mode: 'dark',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: { paper: 'rgb(5, 30, 52)' },
  },
})

export default theme
