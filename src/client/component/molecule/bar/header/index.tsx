import * as React from 'react'
import Box from '@mui/material/Box'
import { PropsWithChildren } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

const HeaderBar = ({ children }: PropsWithChildren<any>) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </Box>
  )
}
export default HeaderBar
