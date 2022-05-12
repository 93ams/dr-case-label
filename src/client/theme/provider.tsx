import { Theme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import React, { PropsWithChildren } from 'react'

export type ThemeProps = { theme: Theme }
export const ThemeProvider = ({
  children,
  theme,
}: PropsWithChildren<ThemeProps>) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)
